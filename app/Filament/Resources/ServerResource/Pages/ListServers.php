<?php

namespace App\Filament\Resources\ServerResource\Pages;

use Filament\Actions;
use Filament\Resources\Pages\ListRecords;
use App\Filament\Resources\ServerResource;

class ListServers extends ListRecords
{
    protected static string $resource = ServerResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\Action::make('synchronize_servers')
                ->label(__('Synchronize servers'))
                ->icon('heroicon-o-arrow-path')
                ->color('gray')
                ->url(ServerResource::getUrl('synchronize')),
            ...parent::getHeaderActions(),
        ];
    }
}
