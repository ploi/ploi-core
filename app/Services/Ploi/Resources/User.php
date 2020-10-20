<?php

namespace App\Services\Ploi\Resources;

use App\Services\Ploi\Ploi;

class User extends Resource
{
    private $endpoint = 'user';

    public function __construct(Ploi $ploi = null, int $id = null)
    {
        parent::__construct($ploi, $id);

        $this->setEndpoint($this->endpoint);
    }

    public function get()
    {
        return $this->getPloi()->makeAPICall($this->getEndpoint());
    }

    public function serverProviders($id = null)
    {
        $url = $this->getEndpoint() . '/server-providers';

        if ($id) {
            $url .= '/' . $id;
        }

        return $this->getPloi()->makeAPICall($url);
    }
}
