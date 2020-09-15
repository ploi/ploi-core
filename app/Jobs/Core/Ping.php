<?php

namespace App\Jobs\Core;

use App\Services\Ploi\Ploi;
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
        $response = Http::withHeaders([
            'Accept' => 'application/json',
            'Content-Type' => 'application/json',
            'X-Ploi-Core-Key' => config('services.ploi.core-token')
        ])
            ->withToken(config('services.ploi.token'))
            ->get((new Ploi)->url . 'ping');

        if (!$response->ok() || !$response->json()) {

            // Something went wrong..

            return;
        }

        $response->json();
    }
}
