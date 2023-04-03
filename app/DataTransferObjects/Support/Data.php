<?php

namespace App\DataTransferObjects\Support;

use Illuminate\Support\Enumerable;
use Spatie\LaravelData\DataCollection;
use Illuminate\Pagination\AbstractPaginator;
use Illuminate\Contracts\Pagination\Paginator;
use Illuminate\Pagination\AbstractCursorPaginator;

class Data extends \Spatie\LaravelData\Data
{
    public static function collection(Paginator|Enumerable|array|AbstractCursorPaginator|DataCollection|AbstractPaginator|\Illuminate\Contracts\Pagination\CursorPaginator $items): \App\DataTransferObjects\Support\DataCollection
    {
        return new \App\DataTransferObjects\Support\DataCollection(static::class, $items);
    }
}
