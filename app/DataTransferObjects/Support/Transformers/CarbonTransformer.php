<?php

namespace App\DataTransferObjects\Support\Transformers;

use Spatie\LaravelData\Support\DataProperty;
use Spatie\LaravelData\Transformers\Transformer;

class CarbonTransformer implements Transformer
{
    public function transform(DataProperty $property, mixed $value): mixed
    {
        return $value->toISOString();
    }
}
