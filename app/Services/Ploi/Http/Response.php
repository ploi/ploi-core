<?php

namespace App\Services\Ploi\Http;

use Illuminate\Http\Client\Response as ClientResponse;
use stdClass;

class Response
{
    protected ?stdClass $json;

    protected ClientResponse $response;

    public function __construct(ClientResponse $response)
    {
        $this->setResponse($response);
        $this->decodeJson();
    }

    private function setResponse(ClientResponse $response): self
    {
        $this->response = $response;

        return $this;
    }

    public function getResponse(): ClientResponse
    {
        return $this->response;
    }

    private function decodeJson(): self
    {
        $json = $this->getResponse()->json();

        return $this->setJson($json);
    }

    public function setJson(stdClass|array $json = null): self
    {
        if (is_array($json)) {
            $json = json_decode(json_encode($json));
        }

        $this->json = $json;

        return $this;
    }

    public function getJson(): ?stdClass
    {
        return $this->json;
    }

    public function getData()
    {
        return object_get($this->getJson(), 'data');
    }

    public function toArray(): array
    {
        return [
            'json' => $this->getJson(),
            'response' => $this->getResponse(),
        ];
    }
}
