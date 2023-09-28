<?php

namespace App\Filament\Resources\ProviderResource\Pages;

use Filament\Actions;
use Filament\Resources\Pages\ListRecords;
use App\Filament\Resources\ProviderResource;

class ListProviders extends ListRecords
{
    protected $listeners = [
        '$refresh',
    ];

    protected static string $resource = ProviderResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\Action::make('synchronize_providers')
                ->label(__('Synchronize providers'))
                ->icon('heroicon-o-arrow-path')
                ->color('gray')
                ->url(ProviderResource::getUrl('synchronize')),
        ];
    }
}
