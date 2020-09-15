<?php

namespace App\Jobs\Databases;

use App\Models\Database;
use App\Services\Ploi\Ploi;
use Illuminate\Bus\Queueable;
use App\Traits\JobHasThresholds;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

class FetchDatabaseStatus implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels, JobHasThresholds;

    public $database;

    /**
     * Create a new job instance.
     *
     * @param Database $database
     * @param int $threshold
     */
    public function __construct(Database $database, $threshold = 0)
    {
        $this->database = $database;
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
            $this->database->delete();

            return;
        }

        $ploi = new Ploi(config('services.ploi.token'));

        $ploiDatabase = $ploi->server($this->database->server->ploi_id)->databases()->get($this->database->ploi_id)->getData();

        if ($ploiDatabase->status !== Database::STATUS_ACTIVE) {
            $this->incrementThreshold();

            dispatch(new self($this->database, $this->threshold))->delay(now()->addSeconds(2));

            return;
        }

        $this->database->status = $ploiDatabase->status;
        $this->database->save();
    }
}
