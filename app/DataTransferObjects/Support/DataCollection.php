<?php

namespace App\DataTransferObjects\Support;

use Closure;
use Illuminate\Support\Collection;
use Illuminate\Support\Enumerable;
use Illuminate\Pagination\CursorPaginator;
use Illuminate\Contracts\Pagination\Paginator;
use Spatie\LaravelData\Support\TransformationType;

class DataCollection extends \Spatie\LaravelData\DataCollection
{
    protected ?Closure $through = null;

    protected ?Closure $filter = null;

    protected Enumerable|CursorPaginator|Paginator $items;

    public function __construct(
        protected string $dataClass,
        Enumerable|array|CursorPaginator|Paginator|\Spatie\LaravelData\DataCollection $items
    ) {
        $this->items = match (true) {
            is_array($items) => new Collection($items),
            $items instanceof \Spatie\LaravelData\DataCollection => $items->toCollection(),
            default => $items
        };

        $this->ensureAllItemsAreData();
    }

    public function transform(TransformationType $type): array
    {
        $transformer = new DataCollectionTransformer(
            $this->dataClass,
            $type,
            $this->getInclusionTree(),
            $this->getExclusionTree(),
            $this->items,
            $this->through,
            $this->filter
        );

        return $transformer->transform();
    }
}
