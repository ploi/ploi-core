<?php

namespace App\Http\Controllers\Profile\TwoFactorAuthentication;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;

class RegenerateRecoveryCodesController extends Controller
{
    public function __invoke(Request $request): RedirectResponse
    {
        $request->user()->generateRecoveryCodes();

        return redirect()
            ->route('profile.security.index')
            ->with('success', __('Your recovery codes have been regenerated'));
    }
}
