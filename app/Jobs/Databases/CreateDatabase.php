<?php

namespace App\Jobs\Databases;

use App\Models\Database;
use App\Traits\HasPloi;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class CreateDatabase implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels, HasPloi;

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

        $ploiDatabase = $this->getPloi()
            ->server($this->database->server->ploi_id)
            ->databases()
            ->create($this->database->name, $databaseUser->name, $this->password);

        ray($ploiDatabase);
        $this->database->ploi_id = $ploiDatabase->id;
        $this->database->save();

        ray($ploiDatabase);
        $databaseUser->ploi_id = $ploiDatabase->users[0]->id;
        $databaseUser->save();

        // Let's fetch the status after 5 seconds
        dispatch(new FetchDatabaseStatus($this->database))->delay(now()->addSeconds(3));
    }
}
