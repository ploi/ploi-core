<?php

namespace App\Console;

use App\Jobs\Core\Ping;
use App\Console\Commands\Core\Css;
use App\Console\Commands\Core\Trial;
use App\Console\Commands\Core\Cleanup;
use App\Console\Commands\Core\Install;
use App\Console\Commands\Core\CssBackup;
use App\Console\Commands\Core\Synchronize;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    protected $commands = [
        Css::class,
        CssBackup::class,
        Install::class,
        Synchronize::class,
        Cleanup::class,
        Trial::class,
    ];

    protected function schedule(Schedule $schedule)
    {
        $schedule->call(function () {
            dispatch(new Ping())->delay(now()->addMinutes(rand(1, 30)));
        })->dailyAt('02:00');

        $schedule->command('core:cleanup')->daily();
        $schedule->command('core:trial')->dailyAt('10:00');
    }
}
