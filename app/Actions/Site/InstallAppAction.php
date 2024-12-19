<?php

namespace App\Actions\Site;

use App\Models\Site;
use App\Models\Server;
use App\Jobs\Apps\InstallApp;
use App\DataTransferObjects\AppData;

class InstallAppAction
{
    public function execute(AppData $appData): ?Site
    {
        $server = $this->determineServer($appData);

        if (! $server) {
            return null;
        }

        $site = $server->sites()->findOrFail($appData->site_id);

        $appData->getUser()->sites()->save($site);

        dispatch(new InstallApp(
            site: $site,
            type: $appData->type,
            options: $appData->options,
        ));

        $site->project = $appData->type;
        $site->save();

        $appData->getUser()->systemLogs()->create([
            'title' => 'Application installed',
            'description' => 'A new application has been created',
        ])->model()->associate($site)->save();

        return $site;
    }

    protected function determineServer(AppData $appData): ?Server
    {
        if ($appData->server_id) {
            return $appData->getUser()->servers()->findOrFail($appData->server_id);
        }

        $server = Server::query()
            ->where('maximum_sites', '>', 0)
            ->where(function ($query) use ($appData) {
                return $query
                    ->where(fn ($query) => $query->whereHas('users', fn ($query) => $query->where('user_id', $appData->getUser()->id)))
                    ->orWhere(function ($query) {
                        return $query->doesntHave('users');
                    });
            })
            ->withCount('sites')
            ->inRandomOrder()
            ->first();

        return $server && $server->sites_count < $server->maximum_sites
            ? $server
            : null;
    }

}
