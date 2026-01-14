<?php

namespace App\Filament\Resources\Sites\Pages;

use App\Filament\Resources\Sites\Widgets\AvailableSitesOverview;
use Filament\Actions\Action;
use App\Models\Site;
use Filament\Actions;
use App\Models\Server;
use App\Services\Ploi\Ploi;
use Filament\Resources\Pages\Page;
use App\Filament\Resources\Sites\SiteResource;
use Filament\Notifications\Notification;

class SynchronizeSites extends Page
{
    protected static string $resource = SiteResource::class;

    protected string $view = 'filament.resources.site-resource.pages.synchronize-sites';

    public function getHeaderWidgets(): array
    {
        return [
            AvailableSitesOverview::class,
        ];
    }

    protected function getHeaderActions(): array
    {
        return [
            Action::make('synchronize_sites')
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
