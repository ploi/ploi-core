<?php

namespace App\Jobs\Certificates;

use App\Models\Certificate;
use App\Services\Ploi\Ploi;
use Illuminate\Bus\Queueable;
use App\Traits\JobHasThresholds;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

class FetchCertificateStatus implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels, JobHasThresholds;

    public $certificate;

    /**
     * Create a new job instance.
     *
     * @param Certificate $certificate
     * @param int $threshold
     */
    public function __construct(Certificate $certificate, $threshold = 0)
    {
        $this->certificate = $certificate;
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
            $this->certificate->delete();

            return;
        }

        $ploi = new Ploi(config('services.ploi.token'));

        $ploiCronjob = $ploi->server($this->certificate->server->ploi_id)
            ->sites($this->certificate->site->ploi_id)
            ->certificates()
            ->get($this->certificate->ploi_id)
            ->getData();

        if ($ploiCronjob->status !== Certificate::STATUS_ACTIVE) {
            $this->incrementThreshold();

            dispatch(new self($this->certificate, $this->threshold))->delay(now()->addSeconds(4));

            return;
        }

        $this->certificate->status = $ploiCronjob->status;
        $this->certificate->save();
    }
}
