<?php

namespace App\Jobs\Cronjobs;

use App\Models\Cronjob;
use App\Services\Ploi\Ploi;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

class CreateCronjob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public $cronjob;

    /**
     * Create a new job instance.
     *
     * @param Cronjob $cronjob
     */
    public function __construct(Cronjob $cronjob)
    {
        $this->cronjob = $cronjob;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $owner = $this->cronjob->site->users()->first();

        $ploi = new Ploi(config('services.ploi.token'));

        $ploiCronjob = $ploi->server($this->cronjob->server->ploi_id)->cronjobs()->create(
            $this->cronjob->command,
            $this->cronjob->frequency,
            $owner->user_name
        );

        $this->cronjob->ploi_id = $ploiCronjob->id;
        $this->cronjob->save();

        // Lets fetch the status after 5 seconds
        dispatch(new FetchCronjobStatus($this->cronjob))->delay(now()->addSeconds(3));
    }
}
