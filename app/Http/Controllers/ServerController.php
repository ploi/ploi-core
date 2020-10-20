<?php

namespace App\Http\Controllers;

use App\Http\Requests\ServerRequest;
use App\Http\Requests\ServerUpdateRequest;
use App\Jobs\Servers\CreateServer;
use App\Jobs\Servers\DeleteServer;
use App\Models\Server;
use Illuminate\Http\Request;
use App\Http\Resources\ServerResource;

class ServerController extends Controller
{
    public function index()
    {
        $servers = auth()->user()->servers()->latest()->paginate();

        $providers = auth()->user()->package->providers()->pluck('name', 'id');

        return inertia('Servers/Index', [
            'servers' => ServerResource::collection($servers),
            'dataProviders' => $providers
        ]);
    }

    public function store(ServerRequest $request)
    {
        abort_if(!$request->user()->can('create', Server::class), 403);

        $provider = $request->user()->package->providers()->findOrFail($request->input('provider'));
        $region = $provider->regions()->findOrFail($request->input('region'));
        $plan = $provider->plans()->findOrFail($request->input('plan'));

        /* @var $server \App\Models\Server */
        $server = $request->user()->servers()->create([
            'name' => $request->input('name')
        ]);

        $server->provider()->associate($provider);
        $server->providerRegion()->associate($region);
        $server->providerPlan()->associate($plan);
        $server->save();

        dispatch(new CreateServer($server));

        return redirect()->route('servers.index');
    }

    public function show($id)
    {
        $server = auth()->user()->servers()->findOrFail($id);

        return inertia('Servers/Show', [
            'server' => $server,
            'sites' => $server->sites()->latest()->paginate(5, ['*'], 'sites_per_page'),
        ]);
    }

    public function update(ServerUpdateRequest $request, $id)
    {
        $server = $request->user()->servers()->findOrFail($id);

        $server->update([
            'name' => $request->input('name')
        ]);

        return redirect()->route('servers.settings.show', $id)->with('success', __('Server information has been updated'));
    }

    public function destroy(Request $request, $id)
    {
        $server = $request->user()->servers()->findOrFail($id);

        dispatch(new DeleteServer($server->ploi_id));

        $request->user()->systemLogs()->create([
            'title' => 'Server ' . $server->name . ' has been deleted',
            'description' => 'The server ' . $server->name . ' has been deleted by user ' . $request->user()->name
        ]);

        $server->delete();

        return redirect()->route('servers.index')->with('success', __('Your server is deleted'));
    }

    public function plansAndRegions(Request $request, $providerId)
    {
        $provider = $request->user()->package->providers()->findOrFail($providerId);

        return [
            'regions' => $provider->regions()->pluck('label', 'id'),
            'plans' => $provider->plans()->pluck('label', 'id'),
        ];
    }
}
