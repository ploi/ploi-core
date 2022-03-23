<?php

namespace App\Jobs\Apps;

use App\Models\Database;
use App\Models\Site;
use App\Traits\HasPloi;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Support\Arr;

class InstallApp implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels, HasPloi;

    public Site $site;
    public $type;
    public $options;

    public function __construct(Site $site, string $type = Site::PROJECT_WORDPRESS, array $options = [])
    {
        $this->site = $site;
        $this->type = $type;
        $this->options = $options;
    }

    public function handle()
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
