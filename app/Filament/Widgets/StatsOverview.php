<?php

namespace App\Filament\Widgets;

use App\Models\Server;
use App\Models\Site;
use App\Models\User;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Card;

class StatsOverview extends BaseWidget
{
    protected function getCards(): array
    {
        return [
            Card::make(__('Servers'), Server::count())
                ->url(route('filament.resources.servers.index'))
                ->icon('heroicon-o-server'),
            Card::make(__('Sites'), Site::count())
                ->url(route('filament.resources.sites.index'))
                ->icon('heroicon-o-globe-alt'),
            Card::make(__('Users'), User::count())
                ->url(route('filament.resources.users.index'))
                ->icon('heroicon-o-user'),
        ];
    }
}
