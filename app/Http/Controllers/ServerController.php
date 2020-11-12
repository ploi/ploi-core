<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Jobs\Servers\CreateServer;
use App\Jobs\Servers\DeleteServer;
use App\Http\Requests\ServerRequest;
use Illuminate\Support\Facades\Mail;
use App\Http\Resources\ServerResource;
use App\Mail\Server\ServerCreatedEmail;
use App\Http\Requests\ServerUpdateRequest;
use App\Mail\Admin\Server\AdminServerCreatedEmail;

class ServerController extends Controller
{
    public function index()
    {
        $servers = auth()->user()->servers()
            ->withCount('sites')
            ->latest()
            ->paginate();

        $providers = auth()->user()->package ? auth()->user()->package->providers()->pluck('name', 'id') : [];

        return inertia('Servers/Index', [
            'servers' => ServerResource::collection($servers),
            'dataProviders' => $providers
        ]);
    }

    public function store(ServerRequest $request)
    {
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

        Mail::to($request->user())->send(new ServerCreatedEmail($request->user(), $server));

        if (setting('receive_email_on_server_creation')) {
            $admins = User::query()->where('role', User::ADMIN)->get();

            foreach ($admins as $admin) {
                Mail::to($admin)->send(new AdminServerCreatedEmail($request->user(), $server));
            }
        }

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

        $this->authorize('delete', $server);

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
