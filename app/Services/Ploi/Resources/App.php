<?php

namespace App\Services\Ploi\Resources;

use stdClass;
use Illuminate\Support\Arr;
use App\Services\Ploi\Exceptions\Http\NotValid;

class App extends Resource
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
        $this->setEndpoint($this->getServer()->getEndpoint() . '/' . $this->getServer()->getId() . '/sites/' . $this->getSite()->getId());

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

    public function install(string $type = 'wordpress', array $options = []): stdClass
    {
        // Remove the id
        $this->setId(null);

        // Set the options
        $options = [
            'body' => json_encode([
                'create_database' => Arr::get($options, 'create_database', false)
            ]),
        ];

        try {
            $response = $this->getPloi()->makeAPICall($this->getEndpoint() . '/' . $type, 'post', $options);
        } catch (NotValid $exception) {
            return json_decode($exception->getMessage());
        }

        // Set the id of the site
        $this->setId($response->getJson()->data->id);

        // Return the data
        return $response->getJson()->data;
    }

    public function uninstall($type): bool
    {
        $this->buildEndpoint();

        $response = $this->getPloi()->makeAPICall($this->getEndpoint() . '/' . $type, 'delete');

        return $response->getResponse()->getStatusCode() === 200;
    }
}
