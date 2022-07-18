<?php

namespace App\Services\Ploi\Resources;

class Alias extends Resource
{
    public function __construct(Server $server, Site $site)
    {
        parent::__construct($server->getPloi());

        $this->setServer($server);
        $this->setSite($site);

        $this->buildEndpoint();
    }

    public function buildEndpoint(): self
    {
        $this->setEndpoint($this->getSite()->getEndpoint() . '/aliases');

        return $this;
    }

    public function get()
    {
        return $this->getPloi()->makeAPICall($this->getEndpoint());
    }

    public function create(array $aliases)
    {
        $options = [
            'aliases' => $aliases,
        ];

        return $this->getPloi()->makeAPICall($this->getEndpoint(), 'post', $options);
    }

    public function delete(string $alias)
    {
        return $this->getPloi()->makeAPICall($this->getEndpoint() . '/' . $alias, 'delete');
    }
}
