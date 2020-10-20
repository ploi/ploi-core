<?php

namespace App\Jobs\Servers;

use App\Models\Server;
use App\Traits\JobHasThresholds;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

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
        //
    }
}
