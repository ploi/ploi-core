<?php

namespace App\Jobs\Servers;

use App\Models\Server;
use App\Services\Ploi\Ploi;
use Illuminate\Bus\Queueable;
use App\Traits\JobHasThresholds;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

class FetchServerStatus implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels, JobHasThresholds;

    public $server;

    /**
     * Create a new job instance.
     *
     * @param Server $server
     * @param int $threshold
     */
    public function __construct(Server $server, $threshold = 0)
    {
        $this->server = $server;
        $this->setThreshold($threshold);
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        // If we tried over 10 times, game over, delete the site
        if ($this->hasReachedThresholdLimit(10)) {
            $this->server->delete();

            return;
        }

        $ploi = new Ploi;

        $ploiServer = $ploi->server($this->server->ploi_id)->get()->getData();

        if ($ploiServer->status !== Server::STATUS_ACTIVE) {
            $this->incrementThreshold();

            dispatch(new self($this->server, $this->threshold))->delay(now()->addMinutes(2));

            // Check if an IP address is present already
            if ($ploiServer->ip_address && !$this->server->ip) {
                $this->server->ip = $ploiServer->ip_address;
                $this->server->save();
            }

            return;
        }

        $this->server->status = $ploiServer->status;
        $this->server->ip = $ploiServer->ip_address;
        $this->server->internal_ip = $ploiServer->internal_ip;
        $this->server->available_php_versions = $ploiServer->installed_php_versions;
        $this->server->save();
    }
}
