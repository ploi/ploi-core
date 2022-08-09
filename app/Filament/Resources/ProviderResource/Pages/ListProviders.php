<?php

namespace App\Filament\Resources\ProviderResource\Pages;

use App\Filament\Resources\ProviderResource;
use Filament\Pages\Actions\Action;
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
            Action::make('synchronize_providers')
                ->label(__('Synchronize providers'))
                ->icon('heroicon-o-refresh')
                ->color('secondary')
                ->url(route('filament.resources.providers.synchronize')),
        ];
    }
}
