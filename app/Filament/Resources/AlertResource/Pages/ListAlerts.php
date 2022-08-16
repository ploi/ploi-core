<?php

namespace App\Filament\Resources\AlertResource\Pages;

use Filament\Pages\Actions\CreateAction;
use App\Filament\Resources\AlertResource;
use Filament\Resources\Pages\ListRecords;

class ListAlerts extends ListRecords
{
    protected static string $resource = AlertResource::class;

    protected function getActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
