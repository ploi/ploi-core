<?php

namespace App\Jobs\Apps;

use App\Models\Site;
use App\Services\Ploi\Ploi;
use App\Traits\HasPloi;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

class UninstallApp implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels, HasPloi;

    public Site $site;

    /**
     * Create a new job instance.
     *
     * @param Site $site
     */
    public function __construct(Site $site)
    {
        $this->site = $site;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        if (!$this->site->project) {
            return;
        }

        $this->getPloi()
            ->server($this->site->server->ploi_id)
            ->sites($this->site->ploi_id)
            ->app()
            ->uninstall($this->site->project);

        $this->site->project = null;
        $this->site->save();
    }
}
