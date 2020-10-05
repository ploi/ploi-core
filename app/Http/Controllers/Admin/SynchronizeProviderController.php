<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Provider;
use App\Services\Ploi\Ploi;
use Illuminate\Http\Request;

class SynchronizeProviderController extends Controller
{
    public function index()
    {

    }

    public function synchronize()
    {
        $providers = (new Ploi)->user()->serverProviders()->getData();

        foreach ($providers as $ploiProvider) {
            $provider = Provider::updateOrCreate([
                'ploi_id' => $ploiProvider->id,
            ], [
                'label' => $ploiProvider->label,
                'name' => $ploiProvider->name
            ]);

            foreach ($ploiProvider->provider->plans as $plan) {
                $provider->plans()->updateOrCreate([
                    'plan_id' => $plan->id
                ], [
                    'label' => $plan->name,
                ]);
            }

            foreach ($ploiProvider->provider->regions as $region) {
                $provider->regions()->updateOrCreate([
                    'region_id' => $region->id
                ], [
                    'label' => $region->name,
                ]);
            }
        }
    }
}
