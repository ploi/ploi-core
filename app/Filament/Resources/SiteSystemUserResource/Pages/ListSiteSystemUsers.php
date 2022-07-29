<?php

namespace App\Filament\Resources\SiteSystemUserResource\Pages;

use App\Filament\Resources\SiteSystemUserResource;
use Filament\Pages\Actions;
use Filament\Resources\Pages\ListRecords;

class ListSiteSystemUsers extends ListRecords
{
    protected static string $resource = SiteSystemUserResource::class;

    protected function getActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
