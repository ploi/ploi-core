<?php

namespace App\Listeners;

use Illuminate\Auth\Events\Logout;

class ResetTwoFactorAuthenticationSession
{
    public function handle(Logout $event): void
    {
        session()->put('auth.two_factor_authenticated_at', null);
    }
}
