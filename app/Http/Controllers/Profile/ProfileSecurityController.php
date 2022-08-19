<?php

namespace App\Http\Controllers\Profile;

use Illuminate\Http\Request;
use App\Rules\MatchOldPassword;
use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;

class ProfileSecurityController extends Controller
{
    public function index(Request $request)
    {
        $twoFactorAuth = $request->user()->twoFactorAuth()->first();

        // Only show recovery codes once.
        $recoveryCodes = $twoFactorAuth?->recovery_codes_generated_at?->gt(now()->subSecond(1))
            ? $request->user()->getRecoveryCodes()
            : [];

        return inertia('Profile/Security', [
            'twoFactor' => [
                'secret' => [
                    'qr_code' => $twoFactorAuth?->toQr(),
                    'uri' => $twoFactorAuth?->toUri(),
                    'string' => $twoFactorAuth?->toString(),
                ],
                'recoveryCodes' => $recoveryCodes,
                'enabled' => $request->user()->hasTwoFactorEnabled(),
            ],
        ]);
    }

    public function updatePassword(Request $request): RedirectResponse
    {
        $request->validate([
            'current_password' => ['required', new MatchOldPassword],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);

        $request->user()->update(['password' => $request->input('password')]);

        return redirect()->route('profile.security.index')->with('success', __('Your password has been updated'));
    }
}
