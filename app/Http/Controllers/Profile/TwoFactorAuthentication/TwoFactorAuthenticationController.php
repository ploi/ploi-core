<?php

namespace App\Http\Controllers\Profile\TwoFactorAuthentication;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;

class TwoFactorAuthenticationController extends Controller
{
    public function create(Request $request): RedirectResponse
    {
        if ($request->user()->hasTwoFactorEnabled()) {
            return redirect()->route('profile.security.index')->with('error', __('Your two factor authentication is already enabled'));
        }

        $request->user()->createTwoFactorAuth();

        return redirect()->route('profile.security.index')->with('success', __('Your two factor authentication has been enabled'));
    }

    public function destroy(Request $request): RedirectResponse
    {
        $request->user()->disableTwoFactorAuth();

        return redirect()
            ->route('profile.security.index')
            ->with('success', __('Two factor authentication has been disabled'));
    }
}
