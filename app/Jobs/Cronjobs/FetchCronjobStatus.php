<?php

namespace App\Jobs\Cronjobs;

use App\Models\Cronjob;
use App\Traits\HasPloi;
use Illuminate\Bus\Queueable;
use App\Traits\JobHasThresholds;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

class FetchCronjobStatus implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels, JobHasThresholds, HasPloi;

    public $cronjob;

    /**
     * Create a new job instance.
     *
     * @param Cronjob $cronjob
     * @param int $threshold
     */
    public function __construct(Cronjob $cronjob, int $threshold = 0)
    {
        $this->cronjob = $cronjob;
        $this->setThreshold($threshold);
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        // If we tried over 5 times, game over, delete the database
        if ($this->hasReachedThresholdLimit()) {
            $this->cronjob->delete();

            return;
        }

        $ploiCronjob = $this->getPloi()
            ->server($this->cronjob->server->ploi_id)
            ->cronjobs()
            ->get($this->cronjob->ploi_id)
            ->getData();

        if ($ploiCronjob->status !== Cronjob::STATUS_ACTIVE) {
            $this->incrementThreshold();

            dispatch(new self($this->cronjob, $this->threshold))->delay(now()->addSeconds(2));

            return;
        }

        $this->cronjob->status = $ploiCronjob->status;
        $this->cronjob->save();
    }
}
