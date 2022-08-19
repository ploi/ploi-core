<?php

namespace App\Services;

use Illuminate\Support\Arr;
use Illuminate\Support\Str;
use Cloudflare\API\Auth\APIKey;
use Cloudflare\API\Endpoints\DNS;
use Cloudflare\API\Adapter\Guzzle;
use Cloudflare\API\Endpoints\User;
use Cloudflare\API\Endpoints\Zones;
use GuzzleHttp\Exception\ClientException;

class Cloudflare
{
    public $adapter;
    public $zoneId;

    public function __construct($email, $key)
    {
        $key = new APIKey($email, $key);
        $this->adapter = new Guzzle($key);
    }

    public function domains($match = '')
    {
        $zones = new Zones($this->adapter);

        return collect(object_get($zones->listZones($match), 'result'));
    }

    public function zone($zoneId)
    {
        $this->zoneId = $zoneId;

        return $this;
    }

    public function listRecords($page = 1, $perPage = 50, $order = '', $direction = '', $type = '', $name = '', $content = '', $match = 'all')
    {
        $dns = new DNS($this->adapter);

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

        $dns = new DNS($this->adapter);

        try {
            return $dns->addRecord($this->zoneId, $type, $name, $content, $ttl, $proxied, $priority);
        } catch (ClientException $e) {
            return false;
        }
    }

    public function getRecordByValues($name, $type)
    {
        $dns = new DNS($this->adapter);

        try {
            return $dns->getRecordID($this->zoneId, $type, $name);
        } catch (ClientException $e) {
            return false;
        }
    }

    public function deleteRecord($id)
    {
        $dns = new DNS($this->adapter);

        try {
            return $dns->deleteRecord($this->zoneId, $id);
        } catch (ClientException $e) {
            return false;
        }
    }

    public function updateRecord($id, array $data = [])
    {
        $dns = new DNS($this->adapter);

        try {
            $record = $dns->getRecordDetails($this->zoneId, $id);

            return $dns->updateRecordDetails($this->zoneId, $id, [
                'type' => Arr::get($data, 'type'),
                'name' => Arr::get($data, 'name'),
                'content' => Arr::get($data, 'content'),
                'ttl' => Arr::get($data, 'ttl'),
            ]);
        } catch (ClientException $e) {
            return false;
        }
    }

    public function toggleProxy($id)
    {
        $dns = new DNS($this->adapter);

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
        $user = new User($this->adapter);

        return $user->getUserDetails();
    }
}
