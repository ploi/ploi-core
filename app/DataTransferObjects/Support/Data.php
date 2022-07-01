<?php

namespace App\DataTransferObjects\Support;

use Illuminate\Contracts\Pagination\Paginator;
use Illuminate\Pagination\AbstractCursorPaginator;
use Illuminate\Pagination\AbstractPaginator;
use Illuminate\Support\Enumerable;
use Spatie\LaravelData\DataCollection;

class Data extends \Spatie\LaravelData\Data
{
    public static function collection(Paginator|Enumerable|array|AbstractCursorPaginator|DataCollection|AbstractPaginator $items): \App\DataTransferObjects\Support\DataCollection
    {
        return new \App\DataTransferObjects\Support\DataCollection(static::class, $items);
    }
}
