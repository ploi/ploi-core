<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;

class EnforceTwoFactorAuthenticationIfEnabled
{
    public function handle(Request $request, Closure $next): mixed
    {
        if (auth()->guest()) {
            return $next($request);
        }

        if (! $request->user()->hasTwoFactorEnabled()) {
            return $next($request);
        }

        $twoFactorAuthenticatedAt = session()->get('auth.two_factor_authenticated_at');

        if ($twoFactorAuthenticatedAt && Carbon::parse($twoFactorAuthenticatedAt)->gt(now()->subHours(3))) {
            return $next($request);
        }

        return redirect()->route('auth.confirm-2fa.index');
    }
}
