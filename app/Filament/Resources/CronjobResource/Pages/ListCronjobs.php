<?php

namespace App\Filament\Resources\CronjobResource\Pages;

use Filament\Pages\Actions;
use Filament\Resources\Pages\ListRecords;
use App\Filament\Resources\CronjobResource;

class ListCronjobs extends ListRecords
{
    protected static string $resource = CronjobResource::class;

    protected function getActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
