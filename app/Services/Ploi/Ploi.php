<?php

namespace App\Services\Ploi;

use Exception;
use GuzzleHttp\Client;
use App\Services\Ploi\Http\Response;
use App\Services\Ploi\Resources\User;
use App\Services\Ploi\Resources\Server;
use Psr\Http\Message\ResponseInterface;
use App\Services\Ploi\Resources\Synchronize;
use App\Services\Ploi\Exceptions\Http\NotFound;
use App\Services\Ploi\Exceptions\Http\NotValid;
use App\Services\Ploi\Exceptions\Http\TooManyAttempts;
use App\Services\Ploi\Exceptions\Http\Unauthenticated;
use App\Services\Ploi\Exceptions\Http\InternalServerError;
use App\Services\Ploi\Exceptions\Http\PerformingMaintenance;

class Ploi
{
    public $url;
    private $guzzle;
    private $apiToken;
    private $apiCoreToken;

    public function __construct(string $token = null, string $coreApiToken = null)
    {
        $this->url = app()->isLocal() ? 'http://core-api.ploi.test/' : 'https://core-api.ploi.io/';

        if (!$token) {
            $token = config('services.ploi.token');
        }

        if (!$coreApiToken) {
            $coreApiToken = config('services.ploi.core-token');
        }

        $this->setApiToken($token);
        $this->setCoreApiToken($coreApiToken);

        $this->buildClient();
    }

    public function setApiToken($token): self
    {
        // Set the token
        $this->apiToken = $token;

        return $this;
    }

    public function setCoreApiToken($coreApiToken): self
    {
        // Set the token
        $this->apiCoreToken = $coreApiToken;

        return $this;
    }

    public function buildClient()
    {
        // Generate a new Guzzle client
        $this->guzzle = new Client([
            'base_uri' => $this->url,
            'http_errors' => false,
            'headers' => [
                'Authorization' => 'Bearer ' . $this->getApiToken(),
                'Accept' => 'application/json',
                'Content-Type' => 'application/json',
                'X-Ploi-Core-Key' => $this->getCoreApiToken()
            ],
        ]);

        return $this;
    }

    public function getApiToken(): string
    {
        return $this->apiToken;
    }

    public function getCoreApiToken(): string
    {
        return $this->apiCoreToken;
    }

    public function makeAPICall(string $url, string $method = 'get', array $options = []): Response
    {
        if (!in_array($method, ['get', 'post', 'patch', 'delete'])) {
            throw new Exception('Invalid method type');
        }

        /**
         * Because we're calling the method dynamically PHPStorm doesn't
         * know that we're getting a response back, so we manually
         * tell it what is returned.
         *
         * @var ResponseInterface $response
         */
        $response = $this->guzzle->{$method}($url, $options);

        switch ($response->getStatusCode()) {
            case 401:
                throw new Unauthenticated($response->getBody());
            case 404:
                throw new NotFound($response->getBody());
            case 422:
                throw new NotValid($response->getBody());
            case 429:
                throw new TooManyAttempts($response->getBody());
            case 500:
                throw new InternalServerError($response->getBody());
            case 503:
                throw new PerformingMaintenance($response->getBody());
        }

        return new Response($response);
    }

    public function server(int $id = null)
    {
        return new Server($this, $id);
    }

    public function user()
    {
        return new User($this);
    }

    public function synchronize()
    {
        return new Synchronize($this);
    }
}
