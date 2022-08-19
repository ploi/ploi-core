<?php

namespace App\Http\Controllers\Profile\TwoFactorAuthentication;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;

class ConfirmTwoFactorAuthenticationController extends Controller
{
    public function __invoke(Request $request): RedirectResponse
    {
        $request->validate([
            'code' => 'required|numeric',
        ]);

        $activated = $request->user()->confirmTwoFactorAuth($request->input('code'));

        if ($activated) {
            session()->put('auth.two_factor_authenticated_at', now());

            return redirect()
                ->route('profile.security.index')
                ->with('success', __('Your two factor authentication has been activated'));
        }

        return redirect()
            ->route('profile.security.index')
            ->with('error', __('Please check your confirmation code'));
    }
}
