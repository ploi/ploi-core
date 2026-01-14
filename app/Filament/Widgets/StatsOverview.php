<?php

namespace App\Filament\Widgets;

use App\Models\Site;
use App\Models\User;
use App\Models\Server;
use App\Filament\Resources\Sites\SiteResource;
use App\Filament\Resources\Users\UserResource;
use App\Filament\Resources\Servers\ServerResource;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;

class StatsOverview extends BaseWidget
{
    protected function getCards(): array
    {
        return [
            BaseWidget\Stat::make(__('Servers'), Server::count())
                ->url(ServerResource::getUrl())
                ->icon('heroicon-o-server'),
            BaseWidget\Stat::make(__('Sites'), Site::count())
                ->url(SiteResource::getUrl())
                ->icon('heroicon-o-globe-alt'),
            BaseWidget\Stat::make(__('Users'), User::count())
                ->url(UserResource::getUrl())
                ->icon('heroicon-o-user'),
        ];
    }
}
