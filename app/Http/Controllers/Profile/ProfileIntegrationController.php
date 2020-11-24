<?php

namespace App\Http\Controllers\Profile;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProfileIntegrationRequest;
use App\Models\UserProvider;
use Illuminate\Http\Request;

class ProfileIntegrationController extends Controller
{
    public function index()
    {
        $providers = auth()->user()->providers()->latest()->get()->map(function($provider){
            return [
                'id' => $provider->id,
                'type' => $provider->type,
                'created_at' => $provider->created_at->format('Y-m-d H:i:s')
            ];
        });

        return inertia('Profile/Integrations', [
            'providers' => $providers,
        ]);
    }

    public function store(ProfileIntegrationRequest $request)
    {
        $request->user()->providers()->updateOrCreate([
            'type' => UserProvider::TYPE_CLOUDFLARE
        ],[
            'type' => UserProvider::TYPE_CLOUDFLARE,
            'token' => $request->input('meta.api_key'),
            'meta' => [
                'cloudflare_email' => encrypt($request->input('meta.cloudflare_email'))
            ]
        ]);

        return redirect()->route('profile.integrations.index');
    }

    public function destroy($providerId)
    {
        auth()->user()->providers()->findOrFail($providerId)->delete();

        return redirect()->route('profile.integrations.index');
    }
}
