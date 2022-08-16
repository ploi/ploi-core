<?php

namespace App\Filament\Resources\SiteResource\Pages;

use App\Traits\HasPloi;
use Filament\Pages\Actions\Action;
use App\Filament\Resources\SiteResource;
use Filament\Resources\Pages\ListRecords;
use Illuminate\Database\Eloquent\Builder;

class ListSites extends ListRecords
{
    use HasPloi;

    protected static string $resource = SiteResource::class;

    protected function getActions(): array
    {
        return [
            Action::make('synchronize_sites')
                ->label(__('Synchronize sites'))
                ->icon('heroicon-o-refresh')
                ->color('secondary')
                ->url(route('filament.resources.sites.synchronize')),

            ...parent::getActions()
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
