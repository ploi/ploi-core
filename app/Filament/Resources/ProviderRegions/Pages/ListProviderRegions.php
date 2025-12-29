<?php

namespace App\Filament\Resources\ProviderRegions\Pages;

use Filament\Actions\CreateAction;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;
use App\Filament\Resources\ProviderRegions\ProviderRegionResource;

class ListProviderRegions extends ListRecords
{
    protected static string $resource = ProviderRegionResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
