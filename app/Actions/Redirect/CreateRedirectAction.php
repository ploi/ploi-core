<?php

namespace App\Actions\Redirect;

use App\DataTransferObjects\RedirectData;
use App\DataTransferObjects\SiteData;
use App\Jobs\Redirects\CreateRedirect;
use App\Models\Redirect;
use App\Models\Server;
use App\Models\Site;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

class CreateRedirectAction
{
    public function execute(RedirectData $redirectData): ?Redirect
    {
        // Determine the server
        $server = $this->determineServer($redirectData);

        if (!$server) {
            return null;
        }

        $site = $server->sites()->find($redirectData->site_id); // Find a specific site related to the server
        if ($site) {
            $redirect = $site->redirects()->create($redirectData->toArray());
        } else {
            throw new \Exception("Site not found for the given server");
        }

        dispatch(new CreateRedirect($redirect));

        // Log the creation event in system logs
        $redirectData->getUser()->systemLogs()->create([
            'title' => __('New redirect created'),
            'description' => __('A new redirect has been created.'),
        ])->model()->associate($redirect)->save();

        return $redirect;
    }

    protected function determineServer(RedirectData $redirectData): ?Server
    {
        if ($redirectData->server_id) {
            return $redirectData->getUser()->servers()->findOrFail($redirectData->server_id);
        }

        $server = Server::query()
            ->where('maximum_sites', '>', 0)
            ->where(function ($query) use ($redirectData) {
                return $query
                    ->where(fn ($query) => $query->whereHas('users', fn ($query) => $query->where('user_id', $redirectData->getUser()->id)))
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
