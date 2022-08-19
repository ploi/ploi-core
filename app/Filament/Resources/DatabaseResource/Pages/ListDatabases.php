<?php

namespace App\Filament\Resources\DatabaseResource\Pages;

use Filament\Pages\Actions;
use Filament\Resources\Pages\ListRecords;
use App\Filament\Resources\DatabaseResource;

class ListDatabases extends ListRecords
{
    protected static string $resource = DatabaseResource::class;

    protected function getActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
