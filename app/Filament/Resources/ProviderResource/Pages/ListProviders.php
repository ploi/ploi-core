<?php

namespace App\Filament\Resources\ProviderResource\Pages;

use App\Filament\Resources\ProviderResource;
use Filament\Resources\Pages\ListRecords;

class ListProviders extends ListRecords
{
    protected $listeners = [
        '$refresh',
    ];

    protected static string $resource = ProviderResource::class;

    protected function getActions(): array
    {
        return [
            //
        ];
    }

    protected function getHeaderWidgets(): array
    {
        return [
            ProviderResource\Widgets\AvailableProvidersOverview::class,
        ];
    }
}
