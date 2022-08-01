<?php

namespace App\Filament\Resources\ServerResource\Pages;

use App\Filament\Resources\ServerResource;
use App\Models\Server;
use App\Traits\HasPloi;
use Filament\Notifications\Notification;
use Filament\Pages\Actions\Action;
use Filament\Resources\Pages\ListRecords;
use Illuminate\Database\Eloquent\Builder;

class ListServers extends ListRecords
{
    use HasPloi;

    protected static string $resource = ServerResource::class;

    protected function getActions(): array
    {
        return [
            Action::make('synchronize_servers')
                ->label(__('Synchronize servers'))
                ->icon('heroicon-o-refresh')
                ->action(function () {
                    $availableServers = $this->getPloi()->synchronize()->servers()->getData();

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

    protected function applySearchToTableQuery(Builder $query): Builder
    {
        if ( filled($searchTerm = $this->getTableSearchQuery()) ) {
            $query
                ->where('domain', 'LIKE', "%{$searchTerm}%")
                ->orWhereHas('users', fn (Builder $query) => $query->where('name', 'LIKE', "%{$searchTerm}%"))
                ->orWhereHas('users', fn (Builder $query) => $query->where('email', 'LIKE', "%{$searchTerm}%"));
        }

        return $query;
    }
}
