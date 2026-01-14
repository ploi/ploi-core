<?php

namespace App\Filament\Resources\Databases\Pages;

use Filament\Actions\CreateAction;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;
use App\Filament\Resources\Databases\DatabaseResource;

class ListDatabases extends ListRecords
{
    protected static string $resource = DatabaseResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
