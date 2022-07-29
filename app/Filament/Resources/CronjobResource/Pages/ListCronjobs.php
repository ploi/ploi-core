<?php

namespace App\Filament\Resources\CronjobResource\Pages;

use App\Filament\Resources\CronjobResource;
use Filament\Pages\Actions;
use Filament\Resources\Pages\ListRecords;

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
