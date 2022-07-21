<?php

namespace App\Actions\Site;

use App\DataTransferObjects\SiteData;
use App\Jobs\Sites\CreateSite;
use App\Mail\Admin\Site\AdminSiteCreatedEmail;
use App\Models\Server;
use App\Models\Site;
use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Mail;

class CreateSiteAction
{
    public function execute(SiteData $siteData): ?Site
    {
        $server = $this->determineServer($siteData);

        if ( ! $server ) {
            return null;
        }

        $site = $server->sites()->create($siteData->toArray());

        $siteData->getUser()->sites()->save($site);

        dispatch(new CreateSite($site));

        $siteData->getUser()->systemLogs()->create([
            'title' => 'New site :site created',
            'description' => 'A new site has been created',
        ])->model()->associate($site)->save();

        $this->sendAdminSiteCreatedEmails($server, $site, $siteData->getUser());

        return $site;
    }

    protected function determineServer(SiteData $siteData): ?Server
    {
        if ( $siteData->server_id ) {
            return $siteData->getUser()->servers()->findOrFail($siteData->server_id);
        }

        $server = Server::query()
            ->where('maximum_sites', '>', 0)
            ->where(function ($query) use ($siteData) {
                return $query
                    ->where(fn ($query) => $query->whereHas('users', fn ($query) => $query->where('user_id', $siteData->getUser()->id)))
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

    protected function sendAdminSiteCreatedEmails(Server $server, Model|Site $site, User $user): void
    {
        if ( ! setting('receive_email_on_site_creation') ) {
            return;
        }

        $admins = User::where('role', User::ADMIN)->get();

        foreach ($admins as $admin) {
            Mail::to($admin)->send(new AdminSiteCreatedEmail(user: $user, server: $server, site: $site));
        }
    }
}
