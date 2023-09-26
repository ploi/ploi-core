<?php

namespace App\DataTransferObjects\Support\Transformers;

use Illuminate\Support\Carbon;
use Spatie\LaravelData\Support\DataProperty;
use Spatie\LaravelData\Transformers\Transformer;

class CarbonTransformer implements Transformer
{
    public function transform(DataProperty $property, mixed $value): string
    {
		/** @var Carbon $value */
        return $value->toISOString();
    }
}
