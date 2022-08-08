<?php

namespace App\Filament\Resources\ServerResource\Widgets;

use App\Actions\Server\SynchronizeServerAction;
use App\Models\AvailableServer;
use Filament\Tables\Actions\Action;
use Filament\Tables\Columns\TextColumn;
use Filament\Widgets\TableWidget;
use Illuminate\Database\Eloquent\Builder;
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

    protected function getTableColumns(): array
    {
        return [
            TextColumn::make('name')
                ->label(__('Name')),
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
