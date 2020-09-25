<?php

namespace App\Http\Controllers\Profile;

use App\Http\Controllers\Controller;
use App\Models\Package;
use App\Models\User;
use Illuminate\Http\Request;

class ProfileBillingController extends Controller
{
    public function index()
    {
        /* @var $user User */
        $user = auth()->user();

        $packages = Package::get();

        $intent = $user->createSetupIntent();

        return inertia('Profile/Billing', [
            'packages' => $packages,
            'subscription' => $user->subscription('default'),
            'public_key' => config('cashier.key'),
            'data_client_secret' => $intent->client_secret,
            'data_card_last_four' => $user->card_last_four,
            'data_card_brand' => $user->card_brand,
        ]);
    }

    public function start(Request $request)
    {

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

        $method = $user->addPaymentMethod($request->get('payment_method'));
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

        $plan = Package::findOrFail($request->input('plan'));

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

        return redirect()->route('profile.billing.index')->with('success', sprintf("Your plan has been updated to %s", $request->input('plan')));
    }
}
