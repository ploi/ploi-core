<?php

namespace App\Filament\Resources\SiteResource\Pages;

use App\Filament\Resources\SiteResource;
use App\Traits\HasPloi;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListSites extends ListRecords
{
    use HasPloi;

    protected static string $resource = SiteResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\Action::make('synchronize_sites')
                ->label(__('Synchronize sites'))
                ->icon('heroicon-o-arrow-path')
                ->color('gray')
                ->url(SiteResource::getUrl('synchronize')),
            ...parent::getHeaderActions()
        ];
    }
}
