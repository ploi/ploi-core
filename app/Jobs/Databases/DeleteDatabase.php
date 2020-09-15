<?php

namespace App\Jobs\Databases;

use App\Services\Ploi\Ploi;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

class DeleteDatabase implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public $serverPloiId;
    public $databasePloiId;

    /**
     * Create a new job instance.
     *
     * @param $serverPloiId
     * @param $databasePloiId
     */
    public function __construct($serverPloiId, $databasePloiId)
    {
        $this->databasePloiId = $databasePloiId;
        $this->serverPloiId = $serverPloiId;
    }


    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        if (!$this->serverPloiId || !$this->databasePloiId) {
            return;
        }

        $ploi = new Ploi(config('services.ploi.token'));

        $ploi->server($this->serverPloiId)->databases()->delete($this->databasePloiId);
    }
}
