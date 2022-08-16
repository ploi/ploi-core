<?php

namespace Tests\Fixtures;

use function Pest\Laravel\get;

use function Pest\Laravel\put;
use function Pest\Laravel\post;
use function Pest\Laravel\delete;
use Illuminate\Testing\TestResponse;

class ApiCall
{
    protected string $apiToken;

    public function __construct()
    {
        $this->apiToken = decrypt(setting('api_token'));
    }

    public function get(string $uri, array $headers = []): TestResponse
    {
        return get($uri, array_merge([
            'Authorization' => "Bearer {$this->apiToken}",
        ], $headers));
    }

    public function post(string $uri, array $data = [], array $headers = []): TestResponse
    {
        return post($uri, $data, array_merge([
            'Authorization' => "Bearer {$this->apiToken}",
        ], $headers));
    }

    public function put(string $uri, array $data = [], array $headers = []): TestResponse
    {
        return put($uri, $data, array_merge([
            'Authorization' => "Bearer {$this->apiToken}",
        ], $headers));
    }

    public function delete(string $uri, array $data = [], array $headers = []): TestResponse
    {
        return delete($uri, $data, array_merge([
            'Authorization' => "Bearer {$this->apiToken}",
        ], $headers));
    }
}
