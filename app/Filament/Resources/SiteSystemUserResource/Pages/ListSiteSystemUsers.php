<?php

namespace App\Filament\Resources\SiteSystemUserResource\Pages;

use Filament\Actions;
use Filament\Resources\Pages\ListRecords;
use App\Filament\Resources\SiteSystemUserResource;

class ListSiteSystemUsers extends ListRecords
{
    protected static string $resource = SiteSystemUserResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
