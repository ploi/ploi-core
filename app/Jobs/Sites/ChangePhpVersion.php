<?php

namespace App\Jobs\Sites;

use App\Models\Site;
use App\Traits\HasPloi;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

class ChangePhpVersion implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels, HasPloi;

    public function __construct(public Site $site, public $version = '8.2')
    {
    }

    public function handle(): void
    {
        $this->getPloi()->server($this->site->server->ploi_id)->sites($this->site->ploi_id)->phpVersion($this->version);

        $this->site->php_version = $this->version;
        $this->site->save();
    }
}
