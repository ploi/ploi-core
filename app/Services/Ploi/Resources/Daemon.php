<?php

namespace App\Services\Ploi\Resources;

use stdClass;
use App\Services\Ploi\Exceptions\Http\NotValid;

class Daemon extends Resource
{
    private $server;

    public function __construct(Server $server, int $id = null)
    {
        parent::__construct($server->getPloi(), $id);

        $this->setServer($server);

        $this->buildEndpoint();
    }

    public function buildEndpoint(): self
    {
        $this->setEndpoint($this->getServer()->getEndpoint() . '/' . $this->getServer()->getId() . '/daemons');

        if ($this->getId()) {
            $this->setEndpoint($this->getEndpoint() . '/' . $this->getId());
        }

        return $this;
    }

    public function get(int $id = null)
    {
        if ($id) {
            $this->setId($id);
        }

        // Make sure the endpoint is built
        $this->buildEndpoint();

        return $this->getPloi()->makeAPICall($this->getEndpoint());
    }

    public function create(string $command, string $systemUser, int $processes): stdClass
    {
        // Remove the id
        $this->setId(null);

        // Set the options
        $options = [
            'body' => json_encode([
                'command' => $command,
                'system_user' => $systemUser,
                'processes' => $processes
            ]),
        ];

        // Build the endpoint
        $this->buildEndpoint();

        // Make the request
        try {
            $response = $this->getPloi()->makeAPICall($this->getEndpoint(), 'post', $options);
        } catch (NotValid $exception) {
            return json_decode($exception->getMessage());
        }

        $this->setId($response->getJson()->data->id);

        // Return the data
        return $response->getData();
    }

    public function restart(int $id = null): stdClass
    {
        if ($id) {
            $this->setId($id);
        }

        // Build the endpoint
        $this->buildEndpoint();

        $this->setEndpoint($this->getEndpoint() . '/restart');

        // Make the request
        try {
            $response = $this->getPloi()->makeAPICall($this->getEndpoint(), 'post');
        } catch (NotValid $exception) {
            return json_decode($exception->getMessage());
        }

        // Return the data
        return $response->getData();
    }

    public function pause(int $id = null): stdClass
    {
        if ($id) {
            $this->setId($id);
        }

        // Build the endpoint
        $this->buildEndpoint();

        $this->setEndpoint($this->getEndpoint() . '/toggle-pause');

        // Make the request
        try {
            $response = $this->getPloi()->makeAPICall($this->getEndpoint(), 'post');
        } catch (NotValid $exception) {
            return json_decode($exception->getMessage());
        }

        // Return the data
        return $response->getData();
    }

    public function delete(int $id): stdClass
    {
        // Remove the id
        $this->setId($id);

        // Build the endpoint
        $this->buildEndpoint();

        // Make the request
        try {
            $response = $this->getPloi()->makeAPICall($this->getEndpoint(), 'delete');
        } catch (NotValid $exception) {
            return json_decode($exception->getMessage());
        }
    }
}
