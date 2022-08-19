<?php

namespace App\Actions\Server;

use App\Models\Server;
use App\Services\Ploi\Ploi;
use Filament\Notifications\Notification;

class SynchronizeServerAction
{
    public function execute(int $ploiServerId): Server
    {
        $serverData = Ploi::make()->server()->get($ploiServerId)->getData();

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

        Notification::make()
            ->body(__('Server :server synchronized successfully.', ['server' => $server->name]))
            ->success()
            ->send();

        return $server;
    }
}
