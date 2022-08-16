<?php

namespace App\Filament\Resources\ServerResource\Widgets;

use App\Models\AvailableServer;
use Filament\Widgets\TableWidget;
use Filament\Tables\Actions\Action;
use Filament\Tables\Columns\TextColumn;
use Illuminate\Database\Eloquent\Builder;
use App\Actions\Server\SynchronizeServerAction;
use Illuminate\Database\Eloquent\Relations\Relation;

class AvailableServersOverview extends TableWidget
{
    protected $listeners = [
        '$refresh',
    ];

    protected int|string|array $columnSpan = 'full';

    protected static ?string $heading = 'Available servers';

    protected function getTableQuery(): Builder|Relation
    {
        return AvailableServer::query();
    }

    protected function getTableDescription(): ?string
    {
        return 'These are all the servers available from your ploi.io account which you can synchronize to your Ploi Core installation.';
    }

    protected function getTableColumns(): array
    {
        return [
            TextColumn::make('name')->label(__('Name')),
            TextColumn::make('ip_address')->label(__('IP address')),
            TextColumn::make('sites_count')->label(__('Sites')),
        ];
    }

    protected function getTableActions(): array
    {
        return [
            Action::make('synchronize_server')
                ->label(__('Synchronize'))
                ->icon('heroicon-o-refresh')
                ->action(function (AvailableServer $record) {
                    app(SynchronizeServerAction::class)->execute($record->id);
                }),
        ];
    }
}
