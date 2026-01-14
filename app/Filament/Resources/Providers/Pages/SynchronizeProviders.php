<?php

namespace App\Filament\Resources\Providers\Pages;

use App\Filament\Resources\Providers\Widgets\AvailableProvidersOverview;
use Filament\Resources\Pages\Page;
use App\Filament\Resources\Providers\ProviderResource;

class SynchronizeProviders extends Page
{
    protected static string $resource = ProviderResource::class;

    protected string $view = 'filament.resources.provider-resource.pages.synchronize-providers';

    protected static ?string $title = 'Synchronize providers';

    protected function getHeaderWidgets(): array
    {
        return [
            AvailableProvidersOverview::class,
        ];
    }

    protected function getHeaderActions(): array
    {
        return [
            //
        ];
    }
}
