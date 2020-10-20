<?php

namespace App\Jobs\Core;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

class UpdateSystem implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public function handle()
    {
        shell_exec('git pull origin master');
        shell_exec('composer install --no-interaction --prefer-dist --no-dev --optimize-autoloader --quiet');

        Artisan::call('horizon:terminate');

        cache()->forget('ploi-core-current-version');
    }
}
