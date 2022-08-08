<?php

namespace App\Filament\Resources\ProviderResource\Widgets;

use App\Actions\Provider\SynchronizeProviderAction;
use App\Models\AvailableProvider;
use Filament\Notifications\Notification;
use Filament\Tables\Actions\Action;
use Filament\Tables\Columns\TextColumn;
use Filament\Widgets\TableWidget;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Relations\Relation;

class AvailableProvidersOverview extends TableWidget
{
    protected $listeners = [
        '$refresh',
    ];

    protected int|string|array $columnSpan = 'full';

    protected static ?string $heading = 'Available Providers';

    protected function getTableQuery(): Builder|Relation
    {
        return AvailableProvider::query();
    }

    protected function getTableColumns(): array
    {
        return [
            TextColumn::make('name')
                ->label(__('Name')),
            TextColumn::make('label')
                ->label(__('Label')),
        ];
    }

    protected function getTableActions(): array
    {
        return [
            Action::make('synchronize_provider')
                ->label(__('Synchronize'))
                ->icon('heroicon-o-refresh')
                ->action(function (AvailableProvider $record, self $livewire) {
                    $provider = app(SynchronizeProviderAction::class)->execute($record->id);

                    $livewire->emit('$refresh');

                    Notification::make()
                        ->body(__('Provider :provider synchronized successfully.', ['provider' => $provider->name]))
                        ->success()
                        ->send();
                }),
        ];
    }
}
