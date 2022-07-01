<?php

namespace App\Actions\Site;

use App\Models\Site;
use App\Models\User;
use App\Models\Server;
use App\Jobs\Sites\CreateSite;
use Illuminate\Support\Facades\Mail;
use App\DataTransferObjects\SiteData;
use Illuminate\Database\Eloquent\Model;
use App\Mail\Admin\Site\AdminSiteCreatedEmail;

class CreateSiteAction
{
    public function execute(SiteData $siteData): ?Site
    {
        $server = $this->determineServer($siteData->server_id ?? null);

        if (! $server) {
            return null;
        }

        $site = $server->sites()->create($siteData->toArray());

        auth()->user()->sites()->save($site);

        dispatch(new CreateSite($site));

        auth()->user()->systemLogs()->create([
            'title' => 'New site :site created',
            'description' => 'A new site has been created',
        ])->model()->associate($site)->save();

        $this->sendAdminSiteCreatedEmails($server, $site);

        return $site;
    }

    protected function determineServer(?int $serverId): ?Server
    {
        if ($serverId) {
            return auth()->user()->servers()->findOrFail($serverId);
        }

        $server = Server::query()
            ->where('maximum_sites', '>', 0)
            ->where(function ($query) {
                return $query
                    ->where(function ($query) {
                        return $query->whereHas('users', function ($query) {
                            return $query->where('user_id', auth()->id());
                        });
                    })
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

    protected function sendAdminSiteCreatedEmails(Server $server, Model|Site $site): void
    {
        if (! setting('receive_email_on_site_creation')) {
            return;
        }

        $admins = User::where('role', User::ADMIN)->get();

        foreach ($admins as $admin) {
            Mail::to($admin)->send(new AdminSiteCreatedEmail(user: auth()->user(), server: $server, site: $site));
        }
    }
}
