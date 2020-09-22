<?php

namespace App\Jobs\Servers;

use App\Services\Ploi\Ploi;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class DeleteServer implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public $serverPloiId;

    /**
     * Create a new job instance.
     *
     * @param $serverPloiId
     */
    public function __construct($serverPloiId)
    {
        $this->serverPloiId = $serverPloiId;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $ploi = new Ploi(config('services.ploi.token'));

        $ploi->server($this->serverPloiId)->delete();
    }
}
