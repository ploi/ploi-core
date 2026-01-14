<?php

namespace App\Filament\Resources\Sites\Pages;

use Filament\Actions\Action;
use Filament\Actions;
use App\Traits\HasPloi;
use App\Filament\Resources\Sites\SiteResource;
use Filament\Resources\Pages\ListRecords;

class ListSites extends ListRecords
{
    use HasPloi;

    protected static string $resource = SiteResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Action::make('synchronize_sites')
                ->label(__('Synchronize sites'))
                ->icon('heroicon-o-arrow-path')
                ->color('gray')
                ->url(SiteResource::getUrl('synchronize')),
            ...parent::getHeaderActions()
        ];
    }
}
