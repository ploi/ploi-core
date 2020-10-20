<?php

namespace App\Jobs\Servers;

use App\Models\Server;
use App\Services\Ploi\Ploi;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class CreateServer implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public $server;
    public $tries = 1;

    /**
     * Create a new job instance.
     *
     * @param Server $server
     */
    public function __construct(Server $server)
    {
        $this->server = $server;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $ploi = new Ploi(config('services.ploi.token'));

        $ploiServer = $ploi->server()->create(
            $this->server->name,
            $this->server->provider->ploi_id,
            $this->server->providerRegion->region_id,
            $this->server->providerPlan->plan_id,
        );

        $this->server->ploi_id = $ploiServer->id;
        $this->server->save();
    }
}
