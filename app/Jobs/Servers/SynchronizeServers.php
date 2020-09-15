<?php

namespace App\Jobs\Servers;

use App\Models\Server;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

class SynchronizeServers implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $ploi = new \App\Services\Ploi\Ploi(config('services.ploi.token'));

        $servers = $ploi->server()->get()->getData();

        foreach ($servers as $server) {
            Server::firstOrCreate([
                'ip' => $server->ip_address,
            ], [
                'name' => $server->name
            ]);
        }
    }
}
