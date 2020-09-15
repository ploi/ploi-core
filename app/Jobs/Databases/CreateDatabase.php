<?php

namespace App\Jobs\Databases;

use App\Models\Database;
use App\Services\Ploi\Ploi;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

class CreateDatabase implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public $database;
    public $password;

    /**
     * Create a new job instance.
     *
     * @param Database $database
     * @param null $password
     */
    public function __construct(Database $database, $password = null)
    {
        $this->database = $database;
        $this->password = $password;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $databaseUser = $this->database->users()->first();

        $ploi = new Ploi(config('services.ploi.token'));

        $ploiDatabase = $ploi->server($this->database->server->ploi_id)->databases()->create($this->database->name, $databaseUser->name, $this->password);

        $this->database->ploi_id = $ploiDatabase->id;
        $this->database->save();

        // Lets fetch the status after 5 seconds
        dispatch(new FetchDatabaseStatus($this->database))->delay(now()->addSeconds(3));
    }
}
