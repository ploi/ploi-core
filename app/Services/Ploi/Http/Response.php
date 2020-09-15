<?php

namespace App\Services\Ploi\Http;

use stdClass;
use Psr\Http\Message\ResponseInterface;

class Response
{
    private $json;
    private $response;

    public function __construct(ResponseInterface $response)
    {
        $this->setResponse($response);
        $this->decodeJson();
    }

    private function setResponse(ResponseInterface $response): self
    {
        $this->response = $response;

        return $this;
    }

    public function getResponse(): ResponseInterface
    {
        return $this->response;
    }

    private function decodeJson(): self
    {
        $json = json_decode($this->getResponse()->getBody());

        return $this->setJson($json);
    }

    public function setJson(stdClass $json = null): self
    {
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
