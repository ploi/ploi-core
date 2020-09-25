<?php

namespace App\Http\Controllers\Profile;

use App\Http\Controllers\Controller;
use App\Models\Package;
use Illuminate\Http\Request;

class ProfileBillingController extends Controller
{
    public function index()
    {
        $user = auth()->user();

        $packages = Package::get();

        $intent = $user->createSetupIntent();

        return inertia('Profile/Billing', [
            'packages' => $packages,
            'data_client_secret' => $intent->client_secret,
            'public_key' => config('cashier.key'),
            'data_card_last_four' => $user->card_last_four,
            'data_card_brand' => $user->card_brand,
        ]);
    }

    public function start(Request $request)
    {

    }
}
