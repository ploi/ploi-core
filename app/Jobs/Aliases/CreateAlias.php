<?php

namespace App\Jobs\Aliases;

use App\Models\Site;
use App\Traits\HasPloi;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class CreateAlias implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels, HasPloi;

    public Site $site;
    public string $alias;

    public function __construct(Site $site, $alias)
    {
        $this->site = $site;
        $this->alias = $alias;
    }

    public function handle()
    {
        $this->getPloi()
            ->server($this->site->server->ploi_id)
            ->sites($this->site->ploi_id)
            ->aliases()
            ->create([$this->alias]);
    }

    public function failed()
    {
        $this->site->aliases = array_diff($this->site->aliases, [$this->alias]);
        $this->site->save();
    }
}
