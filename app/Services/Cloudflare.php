<?php

namespace App\Services;

use GuzzleHttp\Exception\ClientException;
use Illuminate\Support\Str;

class Cloudflare
{
    public $adapter;
    public $zoneId;

    public function __construct($email, $key)
    {
        $key = new \Cloudflare\API\Auth\APIKey($email, $key);
        $this->adapter = new \Cloudflare\API\Adapter\Guzzle($key);
    }

    public function domains($match = '')
    {
        $zones = new \Cloudflare\API\Endpoints\Zones($this->adapter);

        return collect(object_get($zones->listZones($match), 'result'));
    }

    public function zone($zoneId)
    {
        $this->zoneId = $zoneId;

        return $this;
    }

    public function listRecords($page = 1, $perPage = 50, $order = '', $direction = '', $type = '', $name = '', $content = '', $match = 'all')
    {
        $dns = new \Cloudflare\API\Endpoints\DNS($this->adapter);

        if (!$dns || !$this->zoneId) {
            return null;
        }

        return collect($dns->listRecords($this->zoneId, $type, $name, $content, $page, $perPage, $order, $direction, $match)->result)
            ->map(function ($record) {
                // We add this property so our UI panel can see whether a record is being edited.
                $record->edit = false;

                $record->display_content = Str::limit($record->content, 25);

                return $record;
            });
    }

    /**
     * @param string $name
     * @param null $content
     * @param string $type
     * @param int $ttl
     * @param bool $proxied
     * @param int $priority
     *
     * @return bool
     */
    public function addRecord($name, $content = null, $type = 'A', $ttl = 0, $proxied = true, $priority = '0')
    {
        if ($content == null && $type = 'A') {
            $content = $_SERVER['SERVER_ADDR'];
        }

        $dns = new \Cloudflare\API\Endpoints\DNS($this->adapter);

        try {
            return $dns->addRecord($this->zoneId, $type, $name, $content, $ttl, $proxied, $priority);
        } catch (ClientException $e) {
            return false;
        }
    }

    public function getRecordByValues($name, $type)
    {
        $dns = new \Cloudflare\API\Endpoints\DNS($this->adapter);

        try {
            return $dns->getRecordID($this->zoneId, $type, $name);
        } catch (ClientException $e) {
            return false;
        }
    }

    public function deleteRecord($id)
    {
        $dns = new \Cloudflare\API\Endpoints\DNS($this->adapter);

        try {
            return $dns->deleteRecord($this->zoneId, $id);
        } catch (ClientException $e) {
            return false;
        }
    }

    public function updateRecord($id, array $data = [])
    {
        $dns = new \Cloudflare\API\Endpoints\DNS($this->adapter);

        try {
            $record = $dns->getRecordDetails($this->zoneId, $id);

            return $dns->updateRecordDetails($this->zoneId, $id, [
                'type' => object_get($record, 'type'),
                'name' => array_get($data, 'name'),
                'content' => array_get($data, 'content'),
            ]);
        } catch (ClientException $e) {
            return false;
        }
    }

    public function toggleProxy($id)
    {
        $dns = new \Cloudflare\API\Endpoints\DNS($this->adapter);

        try {
            $record = $dns->getRecordDetails($this->zoneId, $id);

            return $dns->updateRecordDetails($this->zoneId, $id, [
                'type' => object_get($record, 'type'),
                'name' => object_get($record, 'name'),
                'content' => object_get($record, 'content'),
                'proxied' => !object_get($record, 'proxied')
            ]);
        } catch (ClientException $e) {
            return false;
        }
    }

    public function user()
    {
        $user = new \Cloudflare\API\Endpoints\User($this->adapter);

        return $user->getUserDetails();
    }
}
