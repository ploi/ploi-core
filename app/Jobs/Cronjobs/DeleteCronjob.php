<?php

namespace App\Jobs\Cronjobs;

use App\Services\Ploi\Ploi;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

class DeleteCronjob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public $serverPloiId;
    public $cronjobPloiId;

    /**
     * Create a new job instance.
     *
     * @param $serverPloiId
     * @param $cronjobPloiId
     */
    public function __construct($serverPloiId, $cronjobPloiId)
    {
        $this->cronjobPloiId = $cronjobPloiId;
        $this->serverPloiId = $serverPloiId;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        if (!$this->serverPloiId || !$this->cronjobPloiId) {
            return;
        }

        $ploi = new Ploi(config('services.ploi.token'));

        $ploi->server($this->serverPloiId)->cronjobs()->delete($this->cronjobPloiId);
    }
}
