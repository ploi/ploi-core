<?php

namespace App\Jobs\Sites;

use App\Models\Site;
use App\Services\Ploi\Ploi;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

class ChangePhpVersion implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public $site;
    public $version;

    /**
     * Create a new job instance.
     *
     * @param Site $site
     * @param string $version
     */
    public function __construct(Site $site, $version = '7.4')
    {
        $this->site = $site;
        $this->version = $version;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $ploi = new Ploi(config('services.ploi.token'));

        $ploi->server($this->site->server->ploi_id)->sites($this->site->ploi_id)->phpVersion($this->version);

        $this->site->php_version = $this->version;
        $this->site->save();
    }
}
