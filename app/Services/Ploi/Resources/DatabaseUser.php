<?php

namespace App\Services\Ploi\Resources;

use App\Services\Ploi\Http\Response;

class DatabaseUser extends Resource
{
    private $database;

    public function __construct(Database $database, int $id = null)
    {
        parent::__construct($database->getPloi(), $id);

        $this->setDatabase($database);

        $this->buildEndpoint();
    }

    public function buildEndpoint(): self
    {
        $this->setEndpoint($this->getDatabase()->getEndpoint() . '/users');

        if ( $this->getId() ) {
            $this->setEndpoint($this->getEndpoint() . '/' . $this->getId());
        }

        return $this;
    }

    public function resetPassword(): Response
    {
        return $this->getPloi()->makeAPICall($this->getEndpoint() . '/reset-password', 'post');
    }

    public function setDatabase(Database $database): static
    {
        $this->database = $database;

        return $this;
    }

    public function getDatabase(): ?Database
    {
        return $this->database;
    }
}
