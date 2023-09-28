<?php

namespace App\Actions\Server;

use App\Models\Server;
use App\Services\Ploi\Ploi;
use Filament\Notifications\Notification;
use Throwable;

class SynchronizeServerAction
{
    public function execute(int $ploiServerId): Server|null
    {
        try {
            $serverData = Ploi::make()->server()->get($ploiServerId)->getData();
        } catch (Throwable $exception) {
            Notification::make()
                ->title('An error has occurred: ' . $exception->getMessage())
                ->danger()
                ->send();

            return null;
        }

        try {
            $server = Server::query()
                ->updateOrCreate([
                    'ploi_id' => $serverData->id,
                ], [
                    'status' => $serverData->status,
                    'name' => $serverData->name,
                    'ip' => $serverData->ip_address,
                    'ssh_port' => $serverData->ssh_port,
                    'internal_ip' => $serverData->internal_ip,
                    'available_php_versions' => $serverData->installed_php_versions,
                ]);
        } catch (Throwable $exception) {
            Notification::make()
                ->title('An error has occurred: ' . $exception->getMessage())
                ->danger()
                ->send();

            return null;
        }

        Notification::make()
            ->title(__('Server :server synchronized successfully.', ['server' => $server->name]))
            ->success()
            ->send();

        return $server;
    }
}
