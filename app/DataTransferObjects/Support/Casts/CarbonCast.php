<?php

namespace App\DataTransferObjects\Support\Casts;

use Illuminate\Support\Carbon;
use Spatie\LaravelData\Casts\Cast;
use Spatie\LaravelData\Support\DataProperty;

class CarbonCast implements Cast
{
    public function cast(DataProperty $property, mixed $value): mixed
    {
        return Carbon::parse($value);
    }
}
