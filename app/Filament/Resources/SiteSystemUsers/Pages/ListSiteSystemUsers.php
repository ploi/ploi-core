<?php

namespace App\Filament\Resources\SiteSystemUsers\Pages;

use Filament\Actions\CreateAction;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;
use App\Filament\Resources\SiteSystemUsers\SiteSystemUserResource;

class ListSiteSystemUsers extends ListRecords
{
    protected static string $resource = SiteSystemUserResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
