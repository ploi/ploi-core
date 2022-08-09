<?php

namespace App\Filament\Resources\SiteResource\Widgets;

use App\Actions\Site\SynchronizeSiteAction;
use App\Models\AvailableSite;
use Filament\Tables\Actions\Action;
use Filament\Tables\Columns\TextColumn;
use Filament\Widgets\TableWidget;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Relations\Relation;

class AvailableSitesOverview extends TableWidget
{
    protected $listeners = [
        '$refresh',
    ];

    protected int|string|array $columnSpan = 'full';

    protected static ?string $heading = 'Available sites';

    protected function getTableDescription(): ?string
    {
        return 'These are all the sites available from your ploi.io account which you can synchronize to your Ploi Core installation.';
    }

    protected function getTableQuery(): Builder|Relation
    {
        return AvailableSite::query();
    }

    protected function getTableColumns(): array
    {
        return [
            TextColumn::make('domain')->label(__('Site')),
            TextColumn::make('system_user')->label(__('System user')),
        ];
    }

    protected function getTableActions(): array
    {
        return [
            Action::make('synchronize_site')
                ->label(__('Synchronize'))
                ->icon('heroicon-o-refresh')
                ->action(function (AvailableSite $record) {
                    app(SynchronizeSiteAction::class)->execute(ploiServerId: $record->server_id, ploiSiteId: $record->id);
                }),
        ];
    }
}
