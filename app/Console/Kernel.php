<?php

namespace App\Console;

use App\Jobs\Core\Ping;
use App\Console\Commands\Core\Install;
use App\Console\Commands\Core\Synchronize;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    protected $commands = [
        Install::class,
        Synchronize::class,
    ];

    protected function schedule(Schedule $schedule)
    {
        $schedule->call(function () {
            dispatch(new Ping())->delay(now()->addMinutes(rand(1, 30)));
        })->dailyAt('02:00');
    }
}
