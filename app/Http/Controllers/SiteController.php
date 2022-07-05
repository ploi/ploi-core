<?php

namespace App\Http\Controllers;

use App\Actions\Site\CreateSiteAction;
use App\DataTransferObjects\SiteData;
use App\Http\Resources\SiteResource;
use App\Jobs\Sites\DeleteSite;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Hash;

class SiteController extends Controller
{
    public function index()
    {
        $sites = auth()->user()
            ->sites()
            ->with('server:id,name')
            ->when(request('server'), function ($query, $value) {
                return $query->where('server_id', $value);
            })
            ->latest()
            ->paginate(config('core.pagination.per_page'));

        $availableServers = auth()->user()->servers()->pluck('name', 'id');

        return inertia('Sites/Index', [
            'sites' => SiteResource::collection($sites),
            'availableServers' => $availableServers,
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $site = app(CreateSiteAction::class)->execute(SiteData::validate($request));

        return $site
            ? redirect()->route('sites.index')->with('success', __('Your website is being created'))
            : redirect()->back()->withErrors([
                'domain' => __('It seems there is no free server room for this site to take place. Please get in touch with support to resolve this.'),
            ]);
    }

    public function show($id)
    {
        $site = auth()->user()->sites()->findOrFail($id);

        if (! $site->isActive()) {
            return redirect()->route('sites.index')->with('info', __('This site does not seem to be active, please wait for the process to finish'));
        }

        return inertia('Sites/Show', [
            'site' => $site,
            'system_user' => $site->getSystemUser(false),
            'ip_address' => $site->server->ip,
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

            if (! Hash::check($request->input('password'), $request->user()->password)) {
                return response([
                    'message' => 'The given data was invalid',
                    'errors' => [
                        'password' => [
                            trans('auth.failed'),
                        ],
                    ],
                ], 422);
            }
        }

        $site = $request->user()->sites()->findOrFail($id);

        $systemUser = $site->getSystemUser();

        return ['ftp_password' => decrypt(Arr::get($systemUser, 'ftp_password'))];
    }
}
