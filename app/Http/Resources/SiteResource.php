<?php

namespace App\Http\Resources;

use App\Models\Site;
use Illuminate\Http\Resources\Json\JsonResource;

class SiteResource extends JsonResource
{
    public function toArray($request)
    {
        /* @var $this \App\Models\Site */
        return [
            'id' => $this->id,
            'status' => $this->parseStatus($this->status),
            'domain' => $this->domain,
            'php_version' => $this->php_version,
            'project' => $this->project,
            'server' => $this->server ? [
                'name' => $this->server->name
            ] : null,
            'created_at' => $this->created_at
        ];
    }

    private function parseStatus($status)
    {
        switch ($status) {
            case Site::STATUS_BUSY:
                return 'busy';
                break;
            case Site::STATUS_ACTIVE:
                return 'active';
                break;
            default:
                return 'unknown';
        }
    }
}
