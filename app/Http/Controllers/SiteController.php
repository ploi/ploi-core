<?php

namespace App\Http\Controllers;

use App\Models\Server;
use Illuminate\Support\Arr;
use Illuminate\Http\Request;
use App\Jobs\Sites\CreateSite;
use App\Jobs\Sites\DeleteSite;
use App\Http\Requests\SiteRequest;
use App\Http\Resources\SiteResource;
use Illuminate\Support\Facades\Hash;

class SiteController extends Controller
{
    public function index()
    {
        $sites = auth()->user()
            ->sites()
            ->when(request('server'), function ($query, $value) {
                return $query->where('server_id', $value);
            })
            ->latest()
            ->paginate(10);

        $availableServers = auth()->user()->servers()->pluck('name', 'id');

        return inertia('Sites/Index', [
            'sites' => SiteResource::collection($sites),
            'availableServers' => $availableServers
        ]);
    }

    public function store(SiteRequest $request)
    {
        if ($serverId = $request->input('server_id')) {
            $server = $request->user()->servers()->findOrFail($serverId);
        } else {
            $server = Server::query()
                ->doesntHave('users')
                ->withCount('sites')
                ->inRandomOrder()
                ->first();

            if ($server && $server->sites_count >= $server->maximum_sites) {
                $server = null;
            }
        }

        if (!$server) {
            return redirect()->back()->withErrors([
                'domain' => __('It seems there is no free server room for this site to take place. Please get in touch with support to resolve this.')
            ]);
        }

        $site = $server->sites()->create($request->all());

        $request->user()->sites()->save($site);

        dispatch(new CreateSite($site));

        $request->user()->systemLogs()->create([
            'title' => 'New site :site created',
            'description' => 'A new site has been created'
        ])->model()->associate($site)->save();

        return redirect()->route('sites.index')->with('success', __('Your website is being created'));
    }

    public function show($id)
    {
        $site = auth()->user()->sites()->findOrFail($id);

        if (!$site->isActive()) {
            return redirect()->route('sites.index')->with('info', __('This site does not seem to be active, please wait for the process to finish'));
        }

        return inertia('Sites/Show', [
            'site' => $site,
            'system_user' => $site->getSystemUser(false),
            'ip_address' => $site->server->ip
        ]);
    }

    public function destroy(Request $request, $id)
    {
        $site = $request->user()->sites()->findOrFail($id);

        $this->authorize('delete', $site);

        dispatch(new DeleteSite($site->server->ploi_id, $site->ploi_id));

        $site->delete();

        return redirect()->route('sites.index')->with('success', __('Your website is deleted'));
    }

    public function requestFtpPassword(Request $request, $id)
    {
        if ($request->user()->requires_password_for_ftp) {
            $this->validate($request, ['password' => 'required|string']);

            if (!Hash::check($request->input('password'), $request->user()->password)) {
                return response([
                    'message' => 'The given data was invalid',
                    'errors' => [
                        'password' => [
                            trans('auth.failed')
                        ]
                    ]
                ], 422);
            }
        }

        $site = $request->user()->sites()->findOrFail($id);

        $systemUser = $site->getSystemUser();

        return ['ftp_password' => decrypt(Arr::get($systemUser, 'ftp_password'))];
    }
}
