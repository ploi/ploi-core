<?php

namespace App\Services\Ploi\Resources;

use App\Models\Server;
use App\Models\Site;
use App\Services\Ploi\Ploi;

class Synchronize extends Resource
{
    private $endpoint = 'synchronize';

    public function __construct(Ploi $ploi = null, int $id = null)
    {
        parent::__construct($ploi, $id);

        $this->setEndpoint($this->endpoint);
    }

    public function servers()
    {
        return $this->getPloi()->makeAPICall($this->getEndpoint() . '/servers');
    }

    public function server(Server $server)
    {
        return $this->getPloi()->makeAPICall($this->getEndpoint() . '/servers/' . $server->ploi_id);
    }

    public function sites()
    {
        return $this->getPloi()->makeAPICall($this->getEndpoint() . '/sites');
    }

    public function site(Site $site)
    {
        return $this->getPloi()->makeAPICall($this->getEndpoint() . '/sites/' . $site->ploi_id);
    }
}
