<?php

namespace App\Http\Controllers\Profile\TwoFactorAuthentication;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

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
