<?php

namespace App\Filament\Resources\DatabaseResource\Pages;

use App\Filament\Resources\DatabaseResource;
use Filament\Pages\Actions;
use Filament\Resources\Pages\CreateRecord;

class CreateDatabase extends CreateRecord
{
    protected static string $resource = DatabaseResource::class;
}
