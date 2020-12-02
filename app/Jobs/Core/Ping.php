<?php

namespace App\Jobs\Core;

use App\Services\Ploi\Ploi;
use App\Services\VersionChecker;
use Illuminate\Bus\Queueable;
use Illuminate\Support\Facades\Http;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

class Ping implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public function handle()
    {
        $version = new VersionChecker;

        $version->flushVersionData();

        $response = Http::withHeaders([
            'Accept' => 'application/json',
            'Content-Type' => 'application/json',
            'X-Ploi-Core-Key' => config('services.ploi.core-token')
        ])
            ->withToken(config('services.ploi.token'))
            ->post((new Ploi)->url . 'ping', [
                'version' => $version->getApplicationVersion(),
                'php_version' => phpversion(),
                'panel_url' => config('app.url')
            ]);

        if (!$response->ok() || !$response->json()) {

            // Something went wrong..

            return 1;
        }

        return 0;
    }
}
