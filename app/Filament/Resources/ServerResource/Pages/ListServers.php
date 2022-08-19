<?php

namespace App\Filament\Resources\ServerResource\Pages;

use Filament\Pages\Actions\Action;
use Filament\Resources\Pages\ListRecords;
use Illuminate\Database\Eloquent\Builder;
use App\Filament\Resources\ServerResource;

class ListServers extends ListRecords
{
    protected static string $resource = ServerResource::class;

    protected function getActions(): array
    {
        return [
            Action::make('synchronize_servers')
                ->label(__('Synchronize servers'))
                ->icon('heroicon-o-refresh')
                ->color('secondary')
                ->url(route('filament.resources.servers.synchronize')),
            ...parent::getActions(),
        ];
    }

    protected function applySearchToTableQuery(Builder $query): Builder
    {
        if (filled($searchTerm = $this->getTableSearchQuery())) {
            $query
                ->where('domain', 'LIKE', "%{$searchTerm}%")
                ->orWhereHas('users', fn (Builder $query) => $query->where('name', 'LIKE', "%{$searchTerm}%"))
                ->orWhereHas('users', fn (Builder $query) => $query->where('email', 'LIKE', "%{$searchTerm}%"));
        }

        return $query;
    }
}
