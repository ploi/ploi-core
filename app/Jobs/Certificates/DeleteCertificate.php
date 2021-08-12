<?php

namespace App\Jobs\Certificates;

use App\Services\Ploi\Ploi;
use App\Traits\HasPloi;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

class DeleteCertificate implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels, HasPloi;

    public $serverPloiId;
    public $sitePloiId;
    public $certificatePloiId;

    /**
     * Create a new job instance.
     *
     * @param $serverPloiId
     * @param $sitePloiId
     * @param $certificatePloiId
     */
    public function __construct($serverPloiId, $sitePloiId, $certificatePloiId)
    {
        $this->serverPloiId = $serverPloiId;
        $this->sitePloiId = $sitePloiId;
        $this->certificatePloiId = $certificatePloiId;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        if (!$this->serverPloiId || !$this->certificatePloiId) {
            return;
        }

        $this->getPloi()
            ->server($this->serverPloiId)
            ->sites($this->sitePloiId)
            ->certificates()
            ->delete($this->certificatePloiId);
    }
}
