<?php

namespace App\Filament\Resources\Servers\Pages;

use Filament\Actions\Action;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;
use App\Filament\Resources\Servers\ServerResource;

class ListServers extends ListRecords
{
    protected static string $resource = ServerResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Action::make('synchronize_servers')
                ->label(__('Synchronize servers'))
                ->icon('heroicon-o-arrow-path')
                ->color('gray')
                ->url(ServerResource::getUrl('synchronize')),
            ...parent::getHeaderActions(),
        ];
    }
}
