<?php

namespace App\Http\Controllers;

use App\Models\Server;
use App\Models\ProviderPlan;
use Illuminate\Http\Request;
use App\Jobs\Servers\DeleteServer;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\RedirectResponse;
use App\Http\Resources\ServerResource;
use App\DataTransferObjects\ServerData;
use Illuminate\Database\Eloquent\Builder;
use App\Actions\Server\CreateServerAction;
use App\Http\Requests\ServerUpdateRequest;

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

    public function store(Request $request): RedirectResponse
    {
        $this->authorize('create', Server::class);

        if ($package = $request->user()->package) {
            if ($package->maximum_servers > 0 && $request->user()->servers()->count() >= $package->maximum_servers) {
                return redirect()->back()->withErrors(['name' => 'You have received the maximum servers you\'re allowed to create.']);
            }
        }

        $data = $request->validate([
            'name' => ['required'],
            'provider_id' => ['required'],
            'provider_region_id' => ['required'],
            'provider_plan_id' => ['required'],
            'database_type' => ['required'],
            'phpmyadmin_link' => ['nullable'],
        ]);

        $data['user_id'] = Auth::id();

        app(CreateServerAction::class)->execute(
            ServerData::validateAndCreate($data)
        );

        return redirect()->route('servers.index');
    }

    public function show($id)
    {
        $server = auth()->user()->servers()->findOrFail($id);

        if ($server->status === Server::STATUS_BUSY) {
            return redirect()->back()->with('info', 'This server is currently busy, please check back later.');
        }

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
        $package = $request->user()->package;

        $provider = $package->providers()->findOrFail($providerId);

        $regions = $provider
            ->regions()
            ->when($provider->allowed_regions, function ($query) use ($provider) {
                return $query->whereIn('id', $provider->allowed_regions);
            })
            ->pluck('label', 'id');

        $plans = $provider
            ->plans()
            ->when($provider->allowed_plans, function ($query) use ($provider) {
                return $query->whereIn('id', $provider->allowed_plans);
            })
            ->when($package->providerPlans()->whereBelongsTo($provider)->exists(), function (Builder $query) use ($provider, $package) {
                return $query->whereIn('id', $package->providerPlans()->whereBelongsTo($provider)->pluck('provider_plans.id'));
            })
            ->get()
            ->mapWithKeys(function (ProviderPlan $providerPlan) {
                return [$providerPlan->id => $providerPlan->label ?? $providerPlan->plan_id];
            });

        return [
            'regions' => $regions,
            'plans' => $plans,
        ];
    }
}
