<?php

namespace App\Filament\Resources\ProviderResource\Pages;

use Filament\Resources\Pages\Page;
use App\Filament\Resources\ProviderResource;

class SynchronizeProviders extends Page
{
    protected static string $resource = ProviderResource::class;

    protected static string $view = 'filament.resources.provider-resource.pages.synchronize-providers';

    protected static ?string $title = 'Synchronize providers';

    protected function getHeaderWidgets(): array
    {
        return [
            ProviderResource\Widgets\AvailableProvidersOverview::class,
        ];
    }

    protected function getHeaderActions(): array
    {
        return [
            //
        ];
    }
}
