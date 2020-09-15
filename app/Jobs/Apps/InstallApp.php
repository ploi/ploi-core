<?php

namespace App\Jobs\Apps;

use App\Models\Site;
use App\Services\Ploi\Ploi;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

class InstallApp implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public $site;
    public $type;
    public $options;

    /**
     * Create a new job instance.
     *
     * @param Site $site
     * @param string $type
     * @param array $options
     */
    public function __construct(Site $site, $type = Site::PROJECT_WORDPRESS, array $options = [])
    {
        $this->site = $site;
        $this->type = $type;
        $this->options = $options;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $ploi = new Ploi(config('services.ploi.token'));

        $ploi->server($this->site->server->ploi_id)->sites($this->site->ploi_id)->app()->install($this->type, $this->options);
    }
}
