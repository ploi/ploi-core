<?php

namespace App\Filament\Pages;

use App\Services\VersionChecker;
use Filament\Notifications\Notification;
use Filament\Pages\Page;
use Laravel\Horizon\Contracts\MasterSupervisorRepository;

class System extends Page
{
    protected static ?string $navigationIcon = 'heroicon-o-adjustments-vertical';

    protected static string $view = 'filament.pages.system';

    protected static ?string $navigationGroup = 'Settings';

    protected static ?int $navigationSort = 2;

    public function getCurrentVersion(): string
    {
        return app(VersionChecker::class)->getVersions()->currentVersion;
    }

    public function getRemoteVersion(): string
    {
        return app(VersionChecker::class)->getVersions()->remoteVersion;
    }

    public function refreshRemoteVersion(): void
    {
        app(VersionChecker::class)->flushVersionData();

        Notification::make()
            ->success()
            ->title(__('Refreshed versions'))
            ->send();
    }

    public function getHorizonWorkerStatus(): bool
    {
        return rescue(fn() => (bool)app(MasterSupervisorRepository::class)->all(), false, false);
    }

    public function hasAvailableUpdate(): bool
    {
        return app(VersionChecker::class)->getVersions()->isOutOfDate();
    }

    public static function getNavigationBadge(): ?string
    {
        $systemChecker = app(VersionChecker::class);

        if ($systemChecker->isOutOfDate()) {
            return 'Update available';
        }

        return null;
    }
}
