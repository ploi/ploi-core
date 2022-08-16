<?php

namespace App\Actions\User;

use App\Jobs\Servers\DeleteServer;
use App\Jobs\Sites\DeleteSite;
use App\Models\Server;
use App\Models\Site;
use App\Models\User;

class DeleteUserAction
{
    public function execute(User $user, bool $removeAllData): void
    {
        if ( $removeAllData ) {
            $this->removeAllData($user);
        }

        // The next items are already being deleted by the "deleting" event:
        // systemLogs, servers detached, sites detached, supportTickets, supportTicketReplies, userProviders
        $user->delete();
    }

    protected function removeAllData(User $user): void
    {
        $user
            ->sites()
            ->withCount('users')
            ->get()
            ->filter(fn (Site $site) => $site->users_count === 1)
            ->each(function (Site $site) {
                dispatch(new DeleteSite($site->server->ploi_id, $site->ploi_id));

                // Deletes databases, redirects, cronjobs, certificates.
                $site->delete();
            });

        $user
            ->servers()
            ->withCount('users')
            ->get()
            ->filter(fn (Server $server) => $server->users_count === 1)
            ->each(function (Server $server) {
                dispatch(new DeleteServer($server->ploi_id));

                // Deletes databases, redirects, cronjobs, certificates.
                $server->delete();
            });
    }
}
