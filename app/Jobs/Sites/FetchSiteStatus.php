<?php

namespace App\Jobs\Sites;

use App\Models\Site;
use App\Services\Ploi\Ploi;
use Illuminate\Bus\Queueable;
use App\Traits\JobHasThresholds;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

class FetchSiteStatus implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels, JobHasThresholds;

    public $site;

    /**
     * Create a new job instance.
     *
     * @param Site $site
     * @param int $threshold
     */
    public function __construct(Site $site, $threshold = 0)
    {
        $this->site = $site;
        $this->setThreshold($threshold);
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        // If we tried over 5 times, game over, delete the site
        if ($this->hasReachedThresholdLimit()) {
            $this->site->delete();

            return;
        }

        $ploi = new Ploi;

        $ploiSite = $ploi->server($this->site->server->ploi_id)->sites()->get($this->site->ploi_id)->getData();

        if ($ploiSite->status !== Site::STATUS_ACTIVE) {
            $this->incrementThreshold();

            dispatch(new self($this->site, $this->threshold))->delay(now()->addSeconds(2));

            return;
        }

        $this->site->status = $ploiSite->status;
        $this->site->save();
    }
}
