<?php

namespace App\Jobs\Apps;

use App\Models\Site;
use App\Traits\HasPloi;
use App\Models\Database;
use Illuminate\Support\Arr;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

class InstallApp implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels, HasPloi;

    public function __construct(public Site $site, public string $type = Site::PROJECT_WORDPRESS, public array $options = [])
    {
    }

    public function handle(): void
    {
        $response = $this->getPloi()
            ->server($this->site->server->ploi_id)
            ->sites($this->site->ploi_id)
            ->app()
            ->install($this->type, $this->options);

        if (Arr::get($this->options, 'create_database', false)) {
            $database = $this->site->databases()->create([
                'name' => $response->database_name,
            ]);

            $database->status = Database::STATUS_ACTIVE;
            $database->save();
        }
    }
}
