<?php

namespace App\Filament\Resources\Cronjobs\Pages;

use Filament\Resources\Pages\CreateRecord;
use App\Filament\Resources\Cronjobs\CronjobResource;

class CreateCronjob extends CreateRecord
{
    protected static string $resource = CronjobResource::class;
}
