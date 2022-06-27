<?php

namespace App\Console\Commands\Core;

use App\Models\User;
use Illuminate\Console\Command;

class Trial extends Command
{
    protected $signature = 'core:trial';

    protected $description = 'Check for expired trials';

    public function handle()
    {
        User::query()
            ->where('trial_ends_at', '<', now())
            ->each(function (User $user) {
                $user->trial_ends_at = null;
                $user->package_id = setting('default_package');
                $user->save();
            });
    }
}
