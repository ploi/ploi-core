<?php

namespace App\Filament\Resources\ServerResource\Pages;

use App\Filament\Resources\ServerResource;
use App\Models\Server;
use App\Services\Ploi\Ploi;
use Filament\Notifications\Notification;
use Filament\Pages\Actions\Action;
use Filament\Resources\Pages\Page;

class SynchronizeServers extends Page
{
    protected static string $resource = ServerResource::class;

    protected static string $view = 'filament.resources.server-resource.pages.synchronize-servers';

    protected static ?string $title = 'Synchronize servers';

    protected function getHeaderWidgets(): array
    {
        return [
            ServerResource\Widgets\AvailableServersOverview::class,
        ];
    }

    protected function getActions(): array
    {
        return [
            Action::make('synchronize_servers')
                ->label(__('Synchronize all servers'))
                ->icon('heroicon-o-refresh')
                ->action(function () {
                    $availableServers = Ploi::make()->synchronize()->servers()->getData();

                    foreach ($availableServers as $availableServer) {
                        Server::query()
                            ->updateOrCreate([
                                'ploi_id' => $availableServer->id,
                            ], [
                                'status' => $availableServer->status,
                                'name' => $availableServer->name,
                                'ip' => $availableServer->ip_address,
                                'ssh_port' => $availableServer->ssh_port,
                                'internal_ip' => $availableServer->internal_ip,
                                'available_php_versions' => $availableServer->installed_php_versions,
                            ]);
                    }

                    Notification::make()
                        ->body(__('Servers synchronized successfully.'))
                        ->success()
                        ->send();
                }),
        ];
    }
}
