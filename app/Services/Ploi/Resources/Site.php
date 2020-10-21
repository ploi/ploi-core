<?php

namespace App\Services\Ploi\Resources;

use stdClass;
use App\Services\Ploi\Exceptions\Http\NotValid;
use Services\Ploi\Exceptions\Resource\RequiresId;
use Services\Ploi\Exceptions\Resource\Server\Site\DomainAlreadyExists;

/**
 * Class Site
 *
 * @package Services\Ploi\resources\Server
 */
class Site extends Resource
{
    private $server;

    public function __construct(Server $server, int $id = null)
    {
        parent::__construct($server->getPloi(), $id);

        $this->setServer($server);

        // Build the endpoint
        $this->buildEndpoint();
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

    public function getServer(): Server
    {
        return $this->server;
    }

    public function setServer(Server $server)
    {
        $this->server = $server;

        return $this;
    }

    public function buildEndpoint(): self
    {
        $this->setEndpoint($this->getServer()->getEndpoint() . '/' . $this->getServer()->getId() . '/sites');

        if ($this->getId()) {
            $this->setEndpoint($this->getEndpoint() . '/' . $this->getId());
        }

        return $this;
    }

    public function create(
        string $domain,
        string $webDirectory = '/public',
        string $projectRoot = '/',
        string $systemUser = 'ploi',
        string $systemUserPassword = null
    ): stdClass {

        // Remove the id
        $this->setId(null);

        // Set the options
        $options = [
            'body' => json_encode([
                'root_domain' => $domain,
                'web_directory' => $webDirectory,
                'project_root' => $projectRoot,
                'system_user' => $systemUser,
                'system_user_password' => $systemUserPassword
            ]),
        ];

        // Build the endpoint
        $this->buildEndpoint();

        // Make the request
        try {
            $response = $this->getPloi()->makeAPICall($this->getEndpoint(), 'post', $options);
        } catch (NotValid $exception) {
            $errors = json_decode($exception->getMessage())->errors;

            if (!empty($errors->root_domain)
                && $errors->root_domain[0] === 'The root domain has already been taken.') {
                throw new DomainAlreadyExists($domain . ' already exists!');
            }

            throw $exception;
        }

        // Set the id of the site
        $this->setId($response->getJson()->data->id);

        // Return the data
        return $response->getJson();
    }

    public function delete(int $id = null): bool
    {
        if ($id) {
            $this->setId($id);
        }

        $this->buildEndpoint();

        $response = $this->getPloi()->makeAPICall($this->getEndpoint(), 'delete');

        return $response->getResponse()->getStatusCode() === 200;
    }

    public function logs(int $id = null): array
    {
        if ($id) {
            $this->setId($id);
        }

        if (!$this->getId()) {
            throw new RequiresId('No Site ID set');
        }

        $this->setEndpoint($this->buildEndpoint()->getEndpoint() . '/log');

        $response = $this->getPloi()->makeAPICall($this->getEndpoint());

        // Wrap the logs if they're not already wrapped
        if (!is_array($response->getJson()->data)) {
            return [$response->getJson()->data];
        }

        return $response->getJson()->data;
    }

    public function phpVersion($version = '7.4') :stdClass
    {
        // Set the options
        $options = [
            'body' => json_encode([
                'php_version' => $version,
            ]),
        ];

        // Build the endpoint
        $this->buildEndpoint();

        // Make the request
        try {
            $response = $this->getPloi()->makeAPICall($this->getEndpoint() . '/php-version', 'post', $options);
        } catch (NotValid $exception) {
            return json_decode($exception->getMessage());
        }

        // Set the id of the site
        $this->setId($response->getJson()->data->id);

        // Return the data
        return $response->getJson();
    }

    public function redirects($id = null): Redirect
    {
        return new Redirect($this->getServer(), $this, $id);
    }

    public function certificates($id = null): Certificate
    {
        return new Certificate($this->getServer(), $this, $id);
    }

    public function repository($id = null): Repository
    {
        return new Repository($this->getServer(), $this, $id);
    }

    public function queues($id = null): Queue
    {
        return new Queue($this->getServer(), $this, $id);
    }

    public function deployment($id = null): Deployment
    {
        return new Deployment($this->getServer(), $this, $id);
    }

    public function app($id = null): App
    {
        return new App($this->getServer(), $this, $id);
    }
}
