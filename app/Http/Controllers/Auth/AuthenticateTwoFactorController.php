<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

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
