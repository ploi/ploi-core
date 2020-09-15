<?php

namespace App\Services\Ploi\Resources;

use stdClass;
use App\Services\Ploi\Exceptions\Http\NotValid;

class Queue extends Resource
{
    private $server;
    private $site;

    public function __construct(Server $server, Site $site, int $id = null)
    {
        parent::__construct($server->getPloi(), $id);

        $this->setServer($server);
        $this->setSite($site);

        $this->buildEndpoint();
    }

    public function buildEndpoint(): self
    {
        $this->setEndpoint($this->getServer()->getEndpoint() . '/' . $this->getServer()->getId() . '/sites/' . $this->getSite()->getId() . '/queues');

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

    public function create(
        string $connection = 'database',
        string $queue = 'default',
        int $maximumSeconds = 60,
        int $sleep = 30,
        int $processes = 1,
        int $maximumTries = 1
    ): stdClass {
        // Remove the id
        $this->setId(null);

        // Set the options
        $options = [
            'body' => json_encode([
                'connection' => $connection,
                'queue' => $queue,
                'maximum_seconds' => $maximumSeconds,
                'sleep' => $sleep,
                'processes' => $processes,
                'maximum_tries' => $maximumTries
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

        $data = $response->getData();

        $this->setId($data->id);

        // Return the data
        return $data;
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
