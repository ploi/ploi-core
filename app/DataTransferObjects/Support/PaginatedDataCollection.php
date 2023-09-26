<?php

namespace App\DataTransferObjects\Support;

use Spatie\LaravelData\Support\Wrapping\WrapExecutionType;

class PaginatedDataCollection extends \Spatie\LaravelData\PaginatedDataCollection
{
	public function transform(bool $transformValues = true, WrapExecutionType $wrapExecutionType = WrapExecutionType::Disabled, bool $mapPropertyNames = true,): array
	{
		$transformer = new DataCollectableTransformer(
			$this->dataClass,
			$transformValues,
			$wrapExecutionType,
			$mapPropertyNames,
			$this->getPartialTrees(),
			$this->items,
			$this->getWrap(),
		);
		
		return $transformer->transform();
	}
}
