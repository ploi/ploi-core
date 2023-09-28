<?php

namespace App\Filament\Resources\ProviderResource\Widgets;

use App\Models\AvailableProvider;
use Filament\Widgets\TableWidget;
use Filament\Tables\Actions\Action;
use Filament\Tables\Columns\TextColumn;
use Filament\Notifications\Notification;
use Illuminate\Database\Eloquent\Builder;
use App\Actions\Provider\SynchronizeProviderAction;
use Illuminate\Database\Eloquent\Relations\Relation;

class AvailableProvidersOverview extends TableWidget
{
    protected $listeners = [
        '$refresh',
    ];

    protected int|string|array $columnSpan = 'full';

    protected static ?string $heading = 'Available Providers';

    protected function getTableDescription(): ?string
    {
        return 'These are all the providers available from your ploi.io account which you can synchronize to your Ploi Core installation.';
    }

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
                ->icon('heroicon-o-arrow-path')
                ->action(function (AvailableProvider $record, self $livewire) {
                    $provider = app(SynchronizeProviderAction::class)->execute($record->id);

                    $livewire->dispatch('$refresh');

                    Notification::make()
                        ->title(__('Provider :provider synchronized successfully.', ['provider' => $provider->name]))
                        ->success()
                        ->send();
                }),
        ];
    }
}
