<?php

namespace App\Http\Controllers\Profile;

use App\Http\Controllers\Controller;
use App\Models\Package;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;

class ProfileBillingController extends Controller
{
    public function index()
    {
        /* @var $user User */
        $user = auth()->user();

        $packages = Package::query()
            ->where(function ($query) {
                return $query
                    ->where('price_monthly', '>', 0)
                    ->whereNotNull('plan_id');
            })
            ->get()
            ->transform(function (Package $package) {
                $symbol = $package->currency === Package::CURRENCY_EURO ? '€' : '$';

                $package->price_monthly = $symbol . number_format($package->price_monthly, 2, ',', '.');

                return $package;
            });

        $intent = $user->createSetupIntent();

        return inertia('Profile/Billing', [
            'packages' => $packages,
            'subscription' => $user->subscription('default'),
            'public_key' => config('cashier.key'),
            'data_client_secret' => $intent->client_secret,
            'card' => [
                'last_four' => $user->card_last_four,
                'brand' => $user->card_brand
            ]
        ]);
    }

    public function updateCard(Request $request)
    {
        /** @var User $user */
        $user = $request->user();

        $user->createOrGetStripeCustomer([
            'name' => $user->name,
            'description' => $request->input('billing_details')
        ]);

        foreach ($user->paymentMethods() as $paymentMethod) {
            $paymentMethod->delete();
        }

        $user->addPaymentMethod($request->get('payment_method'));
        $user->updateDefaultPaymentMethod($request->get('payment_method'));
        $user->updateDefaultPaymentMethodFromStripe();

        return redirect()->route('profile.billing.index')->with('success', 'Your card has been added, you can now update your plan');
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
            $symbol = $invoice->currency === Package::CURRENCY_EURO ? '€' : '$';

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
}
