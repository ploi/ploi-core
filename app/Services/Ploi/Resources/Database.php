<?php

namespace App\Services\Ploi\Resources;

use App\Services\Ploi\Exceptions\Http\NotValid;
use stdClass;

class Database extends Resource
{
    private $server;

    private $database;

    public function __construct(Server $server, int $id = null)
    {
        parent::__construct($server->getPloi(), $id);

        $this->setServer($server);

        $this->buildEndpoint();
    }

    public function buildEndpoint(): self
    {
        $this->setEndpoint($this->getServer()->getEndpoint() . '/' . $this->getServer()->getId() . '/databases');

        if ( $this->getId() ) {
            $this->setEndpoint($this->getEndpoint() . '/' . $this->getId());
        }

        return $this;
    }

    public function get(int $id = null)
    {
        if ( $id ) {
            $this->setId($id);
        }

        // Make sure the endpoint is built
        $this->buildEndpoint();

        return $this->getPloi()->makeAPICall($this->getEndpoint());
    }

    public function create(string $name, string $user, string $password): stdClass
    {
        // Remove the id
        $this->setId(null);

        // Set the options
        $options = [
            'name' => $name,
            'user' => $user,
            'password' => $password,
        ];

        // Build the endpoint
        $this->buildEndpoint();

        // Make the request
        try {
            $response = $this->getPloi()->makeAPICall($this->getEndpoint(), 'post', $options);
        } catch (NotValid $exception) {
            return json_decode($exception->getMessage());
        }

        // Set the id of the site
        $this->setId($response->getData()->id);

        // Return the data
        return $response->getData();
    }

    public function delete(int $id): bool
    {
        if ( $id ) {
            $this->setId($id);
        }

        $this->buildEndpoint();

        $response = $this->getPloi()->makeAPICall($this->getEndpoint(), 'delete');

        return $response->getResponse()->getStatusCode() === 200;
    }

    public function users(int $id = null): DatabaseUser
    {
        return new DatabaseUser($this, $id);
    }
}
