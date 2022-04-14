<?php

namespace App\Http\Resources\Admin;

use Illuminate\Http\Resources\Json\JsonResource;

class ServerResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'ip' => $this->ip,
            'users' => $this->users,
            'sites_count' => $this->sites_count,
            'maximum_sites' => $this->maximum_sites,
            'created_at' => $this->created_at->format('Y-m-d H:i:s')
        ];
    }
}
