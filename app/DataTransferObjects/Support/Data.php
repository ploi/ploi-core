<?php

namespace App\DataTransferObjects\Support;

use Illuminate\Contracts\Pagination\CursorPaginator;
use Illuminate\Support\Enumerable;
use Spatie\LaravelData\DataCollection;
use Illuminate\Pagination\AbstractPaginator;
use Illuminate\Contracts\Pagination\Paginator;
use Illuminate\Pagination\AbstractCursorPaginator;

class Data extends \Spatie\LaravelData\Data
{
	/**
	 * When working with paginated data, we want to include pagination details in JSON
	 * responses from the API. However, due to legacy requirements Ploi Core is using
	 * a different structure than this package assumes. Therefore, we will override
	 * the data collection, register a custom transformer and output the structure.
	 */
	protected static string $_paginatedCollectionClass = PaginatedDataCollection::class;
}
