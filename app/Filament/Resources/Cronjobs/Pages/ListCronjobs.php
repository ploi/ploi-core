<?php

namespace App\Filament\Resources\Cronjobs\Pages;

use Filament\Actions\CreateAction;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;
use App\Filament\Resources\Cronjobs\CronjobResource;

class ListCronjobs extends ListRecords
{
    protected static string $resource = CronjobResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
