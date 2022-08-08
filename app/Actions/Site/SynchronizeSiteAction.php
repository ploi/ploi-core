<?php

namespace App\Actions\Site;

use App\Models\Server;
use App\Models\Site;
use App\Services\Ploi\Ploi;
use Filament\Notifications\Notification;

class SynchronizeSiteAction
{
    public function execute(int $ploiServerId, int $ploiSiteId): Site
    {
        $siteData = Ploi::make()->server($ploiServerId)->sites()->get($ploiSiteId)->getData();

        $server = Server::query()
            ->where('ploi_id', $siteData->server_id)
            ->firstOrFail();

        $site = Site::query()
            ->updateOrCreate([
                'ploi_id' => $siteData->id,
            ], [
                'domain' => $siteData->domain,
                'php_version' => $siteData->php_version,
                'project' => $siteData->project_type,
            ]);

        $site->status = $siteData->status;
        $site->server_id = $server->id;
        $site->save();

        $certificates = Ploi::make()->server($siteData->server_id)->sites($siteData->id)->certificates()->get()->getData();

        if ( $certificates ) {
            foreach ($certificates as $certificate) {
                $site->certificates()->updateOrCreate([
                    'ploi_id' => $certificate->id,
                ], [
                    'status' => $certificate->status,
                    'ploi_id' => $certificate->id,
                    'domain' => $certificate->domain,
                    'type' => $certificate->type,
                ]);
            }
        }

        Notification::make()
            ->body(__('Site :site synchronized successfully.', ['site' => $site->domain]))
            ->success()
            ->send();

        return $site;
    }
}
