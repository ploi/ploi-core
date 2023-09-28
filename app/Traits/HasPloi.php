<?php

namespace App\Traits;

use App\Services\Ploi\Ploi;

trait HasPloi
{
    protected function getPloi(): Ploi
    {
        return new Ploi(config('services.ploi.token'));
    }
}
