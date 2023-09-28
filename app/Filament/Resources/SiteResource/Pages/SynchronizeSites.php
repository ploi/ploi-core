<?php

namespace App\Filament\Resources\SiteResource\Pages;

use App\Filament\Resources\SiteResource;
use App\Models\Server;
use App\Models\Site;
use App\Services\Ploi\Ploi;
use Filament\Notifications\Notification;
use Filament\Actions;
use Filament\Resources\Pages\Page;

class SynchronizeSites extends Page
{
    protected static string $resource = SiteResource::class;

    protected static string $view = 'filament.resources.site-resource.pages.synchronize-sites';

    public function getHeaderWidgets(): array
    {
        return [
            SiteResource\Widgets\AvailableSitesOverview::class,
        ];
    }

    protected function getHeaderActions(): array
    {
        return [
            Actions\Action::make('synchronize_sites')
                ->label(__('Synchronize all sites'))
                ->icon('heroicon-o-arrow-path')
                ->requiresConfirmation()
                ->modalHeading('Synchronize sites')
                ->modalDescription('This will synchronize all the sites that are listed in the table, to your Ploi Core installation.')
                ->action(function () {
                    $availableSites = Ploi::make()->synchronize()->sites()->getData();

                    foreach ($availableSites as $availableSite) {
                        $server = Server::query()->where('ploi_id', $availableSite->server_id)->firstOrFail();

                        $site = Site::query()
                            ->updateOrCreate([
                                'ploi_id' => $availableSite->id,
                            ], [
                                'domain' => $availableSite->domain,
                                'php_version' => $availableSite->php_version,
                            ]);

                        $site->status = $availableSite->status;
                        $site->server_id = $server->id;
                        $site->save();
                    }

                    Notification::make()
                        ->title(__('Sites synchronized successfully.'))
                        ->success()
                        ->send();
                }),
        ];
    }
}
