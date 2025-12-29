<?php

namespace App\Filament\Resources\Servers\Pages;

use App\Filament\Resources\Servers\Widgets\AvailableServersOverview;
use Filament\Actions\Action;
use Filament\Actions;
use App\Models\Server;
use App\Services\Ploi\Ploi;
use Filament\Resources\Pages\Page;
use Filament\Notifications\Notification;
use App\Filament\Resources\Servers\ServerResource;

class SynchronizeServers extends Page
{
    protected static string $resource = ServerResource::class;

    protected string $view = 'filament.resources.server-resource.pages.synchronize-servers';

    protected static ?string $title = 'Synchronize servers';

    protected function getHeaderWidgets(): array
    {
        return [
            AvailableServersOverview::class,
        ];
    }

    protected function getHeaderActions(): array
    {
        return [
            Action::make('synchronize_servers')
                ->label(__('Synchronize all servers'))
                ->icon('heroicon-o-arrow-path')
                ->requiresConfirmation()
                ->modalHeading('Synchronize servers')
                ->modalDescription('This will synchronize all the servers that are listed in the table, to your Ploi Core installation.')
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
                        ->title(__('Servers synchronized successfully.'))
                        ->success()
                        ->send();
                }),
        ];
    }
}
