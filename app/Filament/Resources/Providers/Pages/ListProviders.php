<?php

namespace App\Filament\Resources\Providers\Pages;

use Filament\Actions\Action;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;
use App\Filament\Resources\Providers\ProviderResource;

class ListProviders extends ListRecords
{
    protected static string $resource = ProviderResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Action::make('synchronize_providers')
                ->label(__('Synchronize providers'))
                ->icon('heroicon-o-arrow-path')
                ->color('gray')
                ->url(ProviderResource::getUrl('synchronize')),
        ];
    }
}
