<?php

namespace App\Jobs\Certificates;

use App\Models\Certificate;
use App\Services\Ploi\Ploi;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

class CreateCertificate implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public $certificate;

    /**
     * Create a new job instance.
     *
     * @param Certificate $certificate
     */
    public function __construct(Certificate $certificate)
    {
        $this->certificate = $certificate;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $ploi = new Ploi(config('services.ploi.token'));

        $ploiCertificate = $ploi->server($this->certificate->server->ploi_id)
            ->sites($this->certificate->site->ploi_id)
            ->certificates()
            ->create(
                $this->certificate->domain
            );

        $this->certificate->ploi_id = $ploiCertificate->id;
        $this->certificate->save();

        // Lets fetch the status after 5 seconds
        dispatch(new FetchCertificateStatus($this->certificate))->delay(now()->addSeconds(5));
    }

    public function failed()
    {
        $this->certificate->delete();
    }
}
