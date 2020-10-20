<?php

namespace App\Http\Controllers\Admin;

use App\Models\Provider;
use App\Services\Ploi\Ploi;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SynchronizeProviderController extends Controller
{
    public function index()
    {
        if (config('app.demo')) {
            return redirect('/')->with('info', __('This feature is not available in demo mode.'));
        }

        $ploi = new Ploi(config('services.ploi.token'));

        $availableProviders = $ploi->user()->serverProviders()->getData();

        $currentProviders = Provider::whereNotIn('id', array_keys((array)$availableProviders))->get();

        return inertia('Admin/Services/Providers', [
            'availableProviders' => $availableProviders,
            'currentProviders' => $currentProviders
        ]);
    }

    public function synchronize(Request $request, $providerId)
    {
        $ploiProvider = (new Ploi)->user()->serverProviders($providerId)->getData();

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
