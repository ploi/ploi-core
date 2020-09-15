<?php

namespace App\Jobs\Sites;

use App\Services\Ploi\Ploi;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

class DeleteSite implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public $serverPloiId;
    public $sitePloiId;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($serverPloiId, $sitePloiId)
    {
        $this->serverPloiId = $serverPloiId;
        $this->sitePloiId = $sitePloiId;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $ploi = new Ploi(config('services.ploi.token'));

        $ploi->server($this->serverPloiId)->sites()->delete($this->sitePloiId);
    }
}
