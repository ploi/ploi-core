<?php

namespace App\DataTransferObjects\Support;

class DataCollectableTransformer extends \Spatie\LaravelData\Transformers\DataCollectableTransformer
{
    protected function wrapPaginatedArray(array $paginated): array
    {
        $wrapKey = $this->wrap->getKey() ?? 'data';
        
        return [
            $wrapKey => $paginated['data'],
            'links' => [
                'first' => $paginated['first_page_url'],
                'last' => $paginated['last_page_url'],
                'prev' => $paginated['prev_page_url'],
                'next' => $paginated['next_page_url'],
            ],
            'meta' => [
                'current_page' => $paginated['current_page'],
                'from' => $paginated['from'],
                'last_page' => $paginated['last_page'],
                'links' => $paginated['links'],
                'path' => $paginated['path'],
                'per_page' => $paginated['per_page'],
                'to' => $paginated['to'],
                'total' => $paginated['total'],
            ],
        ];
    }
}
