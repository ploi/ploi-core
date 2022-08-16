<?php

namespace App\Filament\Resources\ProviderRegionResource\Pages;

use Filament\Pages\Actions;
use Filament\Resources\Pages\ListRecords;
use App\Filament\Resources\ProviderRegionResource;

class ListProviderRegions extends ListRecords
{
    protected static string $resource = ProviderRegionResource::class;

    protected function getActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
