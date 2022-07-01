<?php

namespace App\DataTransferObjects\Support;

use Illuminate\Support\Arr;

class DataCollectionTransformer extends \Spatie\LaravelData\Transformers\DataCollectionTransformer
{
    protected function wrapPaginatedArray(array $paginated): array
    {
        return [
            'data' => $paginated['data'],
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

        return [
            'data' => $paginated['data'],
            'links' => $paginated['links'] ?? [],
            'meta' => Arr::except($paginated, [
                'data',
                'links',
            ]),
        ];
    }
}
