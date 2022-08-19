<?php

namespace App\Actions\Provider;

use App\Models\Provider;
use App\Services\Ploi\Ploi;

class SynchronizeProviderAction
{
    public function execute(int $ploiProviderId): Provider
    {
        $ploiProvider = Ploi::make()->user()->serverProviders($ploiProviderId)->getData();

        $provider = Provider::updateOrCreate([
            'ploi_id' => $ploiProvider->id,
        ], [
            'label' => $ploiProvider->label,
            'name' => $ploiProvider->name,
        ]);

        foreach ($ploiProvider->provider->plans as $plan) {
            $provider->plans()->updateOrCreate([
                'plan_id' => $plan->id,
            ], [
                'label' => $plan->name,
            ]);
        }

        foreach ($ploiProvider->provider->regions as $region) {
            $provider->regions()->updateOrCreate([
                'region_id' => $region->id,
            ], [
                'label' => $region->name,
            ]);
        }

        return $provider;
    }
}
