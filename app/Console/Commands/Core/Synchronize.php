<?php

namespace App\Console\Commands\Core;

use App\Services\Ploi\Ploi;
use Illuminate\Console\Command;

class Synchronize extends Command
{
    protected $signature = 'core:synchronize';

    protected $description = 'Synchronze data';

    public function handle()
    {
        $ploi = new Ploi(config('services.ploi.token'));

        $data = collect($ploi->user()->serverProviders()->getData());

        foreach ($data as $apiProvider) {
            $provider = \App\Models\Provider::where('ploi_id', $apiProvider->id)->first();

            if (!$provider) {
                $provider = \App\Models\Provider::create([
                    'ploi_id' => $apiProvider->id,
                    'label' => $apiProvider->label,
                    'name' => $apiProvider->label
                ]);
            }

            // Synchronize the plans
            foreach ($apiProvider->provider->plans as $apiPlan) {
                $planCheck = $provider->plans()->where('plan_id', $apiPlan->id)->count();

                if (!$planCheck) {
                    $provider->plans()->create([
                        'plan_id' => $apiPlan->id,
                        'label' => $apiPlan->name
                    ]);
                }
            }

            // Synchronize the regions
            foreach ($apiProvider->provider->regions as $apiRegion) {
                $regionCheck = $provider->regions()->where('region_id', $apiRegion->id)->count();

                if (!$regionCheck) {
                    $provider->regions()->create([
                        'region_id' => $apiRegion->id,
                        'label' => $apiRegion->name
                    ]);
                }
            }
        }
    }
}
