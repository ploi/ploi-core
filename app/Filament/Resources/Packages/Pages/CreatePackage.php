<?php

namespace App\Filament\Resources\Packages\Pages;

use Filament\Resources\Pages\CreateRecord;
use App\Filament\Resources\Packages\PackageResource;

class CreatePackage extends CreateRecord
{
    protected static string $resource = PackageResource::class;
}
