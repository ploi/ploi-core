<?php

namespace App\Services\Ploi\Resources;

class Deployment extends Resource
{
    public function __construct(Server $server, Site $site, int $id = null)
    {
        parent::__construct($server->getPloi(), $id);

        $this->setServer($server);
        $this->setSite($site);

        $this->buildEndpoint();
    }

    public function buildEndpoint(): self
    {
        $this->setEndpoint($this->getServer()->getEndpoint() . '/' . $this->getServer()->getId() . '/sites/' . $this->getSite()->getId());

        if ($this->getId()) {
            $this->setEndpoint($this->getEndpoint() . '/' . $this->getId());
        }

        return $this;
    }

    public function deploy(int $id = null)
    {
        if ($id) {
            $this->setId($id);
        }

        $this->setEndpoint($this->getEndpoint() . '/deploy');

        return $this->getPloi()->makeAPICall($this->getEndpoint(), 'post');
    }

    public function deployScript(int $id = null)
    {
        if ($id) {
            $this->setId($id);
        }

        $this->setEndpoint($this->getEndpoint() . '/deploy/script');

        return $this->getPloi()->makeAPICall($this->getEndpoint());
    }

    public function updateDeployScript($script = '', int $id = null)
    {
        if ($id) {
            $this->setId($id);
        }

        $options = [
            'body' => json_encode([
                'deploy_script' => $script
            ]),
        ];

        $this->setEndpoint($this->getEndpoint() . '/deploy/script');

        return $this->getPloi()->makeAPICall($this->getEndpoint(), 'patch', $options);
    }
}
