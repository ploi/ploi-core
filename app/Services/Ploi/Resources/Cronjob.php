<?php

namespace App\Services\Ploi\Resources;

use stdClass;
use App\Services\Ploi\Exceptions\Http\NotValid;

class Cronjob extends Resource
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
        $this->setEndpoint($this->getServer()->getEndpoint() . '/' . $this->getServer()->getId() . '/crontabs');

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

    public function create(string $command, string $frequency, string $user = 'ploi'): stdClass
    {
        // Remove the id
        $this->setId(null);

        // Set the options
        $options = [
            'body' => json_encode([
                'command' => $command,
                'frequency' => $frequency,
                'user' => $user,
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

        // Set the id of the cronjob
        $this->setId($response->getJson()->data->id);

        // Return the data
        return $response->getJson()->data;
    }

    public function delete(int $id): bool
    {
        if ($id) {
            $this->setId($id);
        }

        $this->buildEndpoint();

        $response = $this->getPloi()->makeAPICall($this->getEndpoint(), 'delete');

        return $response->getResponse()->getStatusCode() === 200;
    }
}
