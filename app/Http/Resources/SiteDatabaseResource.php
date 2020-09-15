<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class SiteDatabaseResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return array
     */
    public function toArray($request)
    {
        /* @var $this \App\Models\Database */
        return [
            'id' => $this->id,
            'status' => $this->status,
            'name' => $this->name
        ];
    }
}
