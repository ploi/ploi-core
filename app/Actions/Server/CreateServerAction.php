<?php

namespace App\Actions\Server;

use App\Models\User;
use App\Models\Server;
use App\Jobs\Servers\CreateServer;
use Illuminate\Support\Facades\Mail;
use App\DataTransferObjects\ServerData;
use App\Mail\Admin\Server\AdminServerCreatedEmail;

class CreateServerAction
{
    public function execute(ServerData $serverData): Server
    {
        [$provider, $providerRegion, $providerPlan] = $this->determineProviderRegionPlan($serverData);

        $server = $serverData->getUser()->servers()->create([
            'name' => $serverData->name,
            'database_type' => $serverData->database_type,
            'os' => setting('default_os', Server::OS_UBUNTU_22)
        ]);

        $server->provider()->associate($provider);
        $server->providerRegion()->associate($providerRegion);
        $server->providerPlan()->associate($providerPlan);
        $server->save();

        dispatch(new CreateServer($server));

        $this->sendAdminServerCreatedEmails($server);

        return $server;
    }

    protected function determineProviderRegionPlan(ServerData $serverData): array
    {
        $provider = $serverData->getUser()->package->providers()->findOrFail($serverData->provider_id);
        $region = $provider->regions()->findOrFail($serverData->provider_region_id);
        $plan = $provider->plans()->findOrFail($serverData->provider_plan_id);

        return [$provider, $region, $plan];
    }

    protected function sendAdminServerCreatedEmails(Server $server): void
    {
        if (! setting('receive_email_on_server_creation')) {
            return;
        }

        $admins = User::query()->where('role', User::ADMIN)->get();

        foreach ($admins as $admin) {
            Mail::to($admin)->send(new AdminServerCreatedEmail(auth()->user(), $server));
        }
    }
}
