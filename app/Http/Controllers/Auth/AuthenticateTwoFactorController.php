<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use App\Providers\RouteServiceProvider;

class AuthenticateTwoFactorController extends Controller
{
    public function index()
    {
        return inertia('Auth/ConfirmTwoFactorAuthentication');
    }

    public function confirm(Request $request): RedirectResponse
    {
        $request->validate([
            'code' => 'totp'
        ]);

        session()->put('auth.two_factor_authenticated_at', now());

        return redirect()->away(RouteServiceProvider::HOME);
    }
}
