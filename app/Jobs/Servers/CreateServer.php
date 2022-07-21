<?php

namespace App\Jobs\Servers;

use App\Models\Server;
use App\Traits\HasPloi;
use Exception;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class CreateServer implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels, HasPloi;

    public $server;
    public $tries = 1;

    public function __construct(Server $server)
    {
        $this->server = $server;
    }

    public function handle()
    {
        $ploiServer = $this->getPloi()->server()->create(
            $this->server->name,
            $this->server->provider->ploi_id,
            $this->server->providerRegion->region_id,
            $this->server->providerPlan->plan_id,
            'server',
            $this->server->database_type
        );

        $this->server->ploi_id = $ploiServer->id;
        $this->server->save();

        // Let's fetch the status after 5 minutes
        dispatch(new FetchServerStatus($this->server))->delay(now()->addMinutes(5));
    }

    public function failed(Exception $exception)
    {
        $this->server->delete();
    }
}
