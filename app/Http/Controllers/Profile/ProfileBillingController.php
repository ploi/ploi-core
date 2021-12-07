<?php

namespace App\Http\Controllers\Profile;

use Carbon\Carbon;
use App\Models\User;
use App\Models\Package;
use Illuminate\Support\Arr;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Stripe\Exception\InvalidRequestException;

class ProfileBillingController extends Controller
{
    public function index(Request $request)
    {
        /* @var $user User */
        $user = auth()->user();

        $sortByType = array_key_first($request->input('sortBy', []));

        $packages = Package::query()
            ->where(function ($query) {
                return $query
                    ->where(function ($query) {
                        return $query
                            ->where('price_monthly', '>', 0)
                            ->orWhere('price_yearly', '>', 0);
                    })
                    ->whereNotNull('plan_id');
            })
            ->when($request->input('sortBy.' . $sortByType), function ($query, $value) use ($sortByType) {
                if ($sortByType === 'price') {
                    return $value === 'asc'
                        ? $query->orderBy('price_monthly', 'asc')
                        : $query->orderBy('price_monthly', 'desc');
                }
                if ($sortByType === 'servers') {
                    return $value === 'asc'
                        ? $query->orderBy('maximum_servers', 'asc')
                        : $query->orderBy('maximum_servers', 'desc');
                }
                if ($sortByType === 'sites') {
                    return $value === 'asc'
                        ? $query->orderBy('maximum_sites', 'asc')
                        : $query->orderBy('maximum_sites', 'desc');
                }
                if ($sortByType === 'name') {
                    return $value === 'asc'
                        ? $query->orderBy('name', 'asc')
                        : $query->orderBy('name', 'desc');
                }

                return $query;
            }, function ($query) {
                return $query->orderBy('price_monthly', 'asc');
            })
            ->get()
            ->transform(function (Package $package) {
                $currency = $this->transformCurrency($package->currency);

                $package->period = 'monthly';

                if ($package->price_yearly > 0) {
                    $package->period = 'yearly';
                }

                $package->price_monthly = ($currency ?? '[Unknown currency]') . number_format($package->price_monthly, 2, ',', '.');
                $package->price_yearly = ($currency ?? '[Unknown currency]') . number_format($package->price_yearly, 2, ',', '.');

                return $package;
            });

        try {
            $clientSecret = $user->createSetupIntent()->client_secret;
        } catch (\Exception $exception) {
            return inertia('Profile/BillingError');
        }

        $subscription = $user->subscription();

        return inertia('Profile/Billing', [
            'packages' => $packages,
            'countries' => countries(),
            'subscription' => $subscription,
            'public_key' => config('cashier.key'),
            'ends' => $subscription ? Carbon::createFromTimeStamp($subscription->asStripeSubscription()->current_period_end)->format('F jS, Y') ?? null : null,
            'data_client_secret' => $clientSecret,
            'card' => [
                'last_four' => $user->card_last_four,
                'brand' => $user->card_brand
            ],
            'filters' => [
                'sort' => [
                    $sortByType => $request->input('sortBy.' . $sortByType, 'asc'),
                ]
            ]
        ]);
    }

    public function updateCard(Request $request)
    {
        /** @var User $user */
        $user = $request->user();

        $user->createOrGetStripeCustomer([
            'name' => $request->input('billing_details.name'),
            'description' => 'Ploi Core Customer ' . $request->input('billing_details.name'),
            'address' => [
                'line1' => $request->input('billing_details.address.line1'),
                'postal_code' => $request->input('billing_details.address.postal_code'),
                'city' => $request->input('billing_details.address.city'),
                'country' => $request->input('billing_details.address.country'),
            ]
        ]);

        foreach ($user->paymentMethods() as $paymentMethod) {
            $paymentMethod->delete();
        }

        $user->addPaymentMethod($request->get('payment_method'));
        $user->updateDefaultPaymentMethod($request->get('payment_method'));
        $user->updateDefaultPaymentMethodFromStripe();

        return redirect()->route('profile.billing.index')->with('success', 'Your card has been added, you can now update your plan');
    }

    public function deleteCard(Request $request)
    {
        /** @var User $user */
        $user = $request->user();

        $user->deletePaymentMethods();

        return redirect()->route('profile.billing.index')->with('success', 'Your credit card has been removed from your account');
    }

    public function updatePlan(Request $request)
    {
        /** @var User $user */
        $user = auth()->user();

        if (!$user->hasStripeId() || !$user->defaultPaymentMethod()) {
            return redirect()->route('profile.billing.index')->with('error', 'You cannot change your plan without a valid creditcard, please update your billing details first');
        }

        $plan = Package::query()->findOrFail($request->input('plan'));

        $planId = $plan->plan_id;

        // Only do something if the user is not already subscribed to this plan.
        if ($user->subscribedToPlan($planId, 'default')) {
            return redirect()->route('profile.billing.index')->with('error', 'You did not select a different plan');
        }

        // If the user is already subscribed to the default plan, we have to swap it. Otherwise create a new one.
        try {
            if ($user->subscribed('default')) {
                $user->subscription('default')->swap($planId);
            } else {
                if ($coupon = $request->input('coupon')) {
                    $user->newSubscription('default', $planId)
                        ->withCoupon($coupon)
                        ->create($user->defaultPaymentMethod()->id);
                } else {
                    $user->newSubscription('default', $planId)->create($user->defaultPaymentMethod()->id);
                }
            }
        } catch (InvalidRequestException $exception) {
            $error = $exception->getJsonBody();

            return redirect()->route('profile.billing.index')->with('error', Arr::get($error, 'error.message'));
        }

        $user->package_id = $plan->id;
        $user->save();

        return redirect()->route('profile.billing.index')->with('success', sprintf("Your plan has been updated to %s", $plan->name));
    }

    public function cancel(Request $request)
    {
        /* @var $user \App\Models\User */
        $user = $request->user();

        $subscription = $user->subscription('default')->cancel();

        return redirect()->route('profile.billing.index')->with('success', __('Your subscription has been cancelled, your end date is ' . $subscription->ends_at));
    }

    public function invoices(Request $request)
    {
        return $request->user()->invoices()->map(function ($invoice) {
            $symbol = $this->transformCurrency($invoice->currency);

            return [
                'id' => $invoice->id,
                'created' => Carbon::createFromTimestamp($invoice->created)->format('Y-m-d H:i:s'),
                'number' => $invoice->number,
                'status' => $invoice->status,
                'total' => $symbol . number_format($invoice->total / 100, 2, ',', '.'),
                'currency' => $invoice->currency,
            ];
        });
    }

    public function pdf(Request $request, $id)
    {
        return $request->user()->downloadInvoice($id, [
            'vendor' => setting('name'),
            'product' => 'Webhosting'
        ]);
    }

    protected function transformCurrency($key)
    {
        $currencies = [
            Package::CURRENCY_EURO => '€',
            Package::CURRENCY_USD => '$',
            Package::CURRENCY_NOK => 'KR ',
            Package::CURRENCY_CAD => 'CAD $',
            Package::CURRENCY_AUD => 'AUD $',
            Package::CURRENCY_GBP => 'GBP £',
            Package::CURRENCY_INR => 'INR ₹',
            Package::CURRENCY_THB => 'THB ',
        ];

        return $currencies[strtolower($key)] ?? '$';
    }
}
