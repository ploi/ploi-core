<?php

namespace App\Jobs\Redirects;

use App\Models\Redirect;
use App\Services\Ploi\Ploi;
use Illuminate\Bus\Queueable;
use App\Traits\JobHasThresholds;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

class FetchRedirectStatus implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels, JobHasThresholds;

    public $redirect;

    /**
     * Create a new job instance.
     *
     * @param Redirect $redirect
     * @param int $threshold
     */
    public function __construct(Redirect $redirect, $threshold = 0)
    {
        $this->redirect = $redirect;
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
            $this->redirect->delete();

            return;
        }

        $ploi = new Ploi(config('services.ploi.token'));

        $ploiRedirect = $ploi->server($this->redirect->server->ploi_id)
            ->sites($this->redirect->site->ploi_id)
            ->redirects()
            ->get($this->redirect->ploi_id)->getData();

        if ($ploiRedirect->status !== Redirect::STATUS_ACTIVE) {
            $this->incrementThreshold();

            dispatch(new self($this->redirect, $this->threshold))->delay(now()->addSeconds(2));

            return;
        }

        $this->redirect->status = $ploiRedirect->status;
        $this->redirect->save();
    }
}
