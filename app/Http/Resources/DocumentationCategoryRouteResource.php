<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class DocumentationCategoryRouteResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param Request $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'title' => $this->title,
            'to' => route('documentation.show', $this->id),
            'active' => object_get(request()->route('documentationCategory'), 'id') === $this->id ? true : false
        ];
    }
}
