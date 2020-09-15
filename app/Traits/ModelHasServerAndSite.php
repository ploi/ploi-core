<?php

namespace App\Traits;

use App\Models\Site;
use App\Models\Server;

trait ModelHasServerAndSite
{
    public function site()
    {
        return $this->belongsTo(Site::class);
    }

    public function server()
    {
        return $this->belongsTo(Server::class);
    }
}
