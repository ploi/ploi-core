<?php

namespace App\Services\Ploi\Resources;

use App\Services\Ploi\Ploi;
use App\Services\Ploi\Traits\HasHistory;

class Resource
{
    use HasHistory;

    private $ploi;
    private $endpoint;
    private $id;
    private $server;
    private $site;

    public function __construct(Ploi $ploi = null, int $id = null)
    {
        if ($ploi) {
            $this->setPloi($ploi);
        }

        if ($id) {
            $this->setId($id);
        }
    }

    public function setId(int $id = null): self
    {
        $this->id = $id;

        $this->addHistory('Resource ID set to ' . $id);

        return $this;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function setPloi(Ploi $ploi): self
    {
        $this->ploi = $ploi;

        $this->addHistory('Ploi instance set to ' . json_encode($ploi));

        return $this;
    }

    public function getPloi(): ?Ploi
    {
        return $this->ploi;
    }

    public function setEndpoint(string $endpoint): self
    {
        $this->endpoint = $endpoint;

        return $this;
    }

    public function getEndpoint(): ?string
    {
        return $this->endpoint;
    }

    public function getSite(): Site
    {
        return $this->site;
    }

    public function setSite(Site $site): self
    {
        $this->site = $site;

        return $this;
    }

    public function getServer(): Server
    {
        return $this->server;
    }

    public function setServer(Server $server)
    {
        $this->server = $server;

        return $this;
    }
}
