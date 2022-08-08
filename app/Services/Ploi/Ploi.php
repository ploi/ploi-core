<?php

namespace App\Services\Ploi;

use App\Services\Ploi\Exceptions\Http\InternalServerError;
use App\Services\Ploi\Exceptions\Http\NotFound;
use App\Services\Ploi\Exceptions\Http\NotValid;
use App\Services\Ploi\Exceptions\Http\PerformingMaintenance;
use App\Services\Ploi\Exceptions\Http\TooManyAttempts;
use App\Services\Ploi\Exceptions\Http\Unauthenticated;
use App\Services\Ploi\Http\Response;
use App\Services\Ploi\Resources\Server;
use App\Services\Ploi\Resources\Synchronize;
use App\Services\Ploi\Resources\User;
use Exception;
use Illuminate\Http\Client\PendingRequest;
use Illuminate\Support\Facades\Http;
use Psr\Http\Message\ResponseInterface;

class Ploi
{
    public $url;

    private $apiToken;

    private $apiCoreToken;

    protected PendingRequest $client;

    public function __construct(string $token = null, string $coreApiToken = null)
    {
        $this->url = config('services.ploi-api.url');

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

    public static function make(): static
    {
        return new static();
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

    public function buildClient(): static
    {
        $this->client = Http::baseUrl($this->url)
            ->withHeaders([
                'Authorization' => 'Bearer ' . $this->getApiToken(),
                'Accept' => 'application/json',
                'Content-Type' => 'application/json',
                'X-Ploi-Core-Key' => $this->getCoreApiToken(),
            ]);

        if (app()->isLocal()) {
            $this->client->withoutVerifying();
        }

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
         * This is a temporary method that was necessary for the switch from the Guzzle client to the Http facade.
         * We _should not_ need this, but it feels safer to keep this fallback code around for now.
         */
        if (count($options) === 1 && array_key_exists('body', $options)) {
            $options = is_string($options['body']) ? json_decode($options['body']) : $options['body'];
        }

        /**
         * Because we're calling the method dynamically PHPStorm doesn't
         * know that we're getting a response back, so we manually
         * tell it what is returned.
         *
         * @var ResponseInterface $response
         */
        $response = $this->client->{$method}($url, $options);

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
