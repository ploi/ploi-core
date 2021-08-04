<?php

namespace App\Http\Controllers\Admin;

use App\Models\Site;
use App\Models\Server;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SynchronizeSiteController extends Controller
{
    public function index()
    {
        if ($this->isDemo()) {
            return redirect('/')->with('info', __('This feature is not available in demo mode.'));
        }

        $availableSites = $this->getPloi()->synchronize()->sites()->getData();

        $currentSites = Site::query()
            ->whereNotIn('id', array_keys((array)$availableSites))
            ->get();

        return inertia('Admin/Services/Sites', [
            'availableSites' => $availableSites,
            'currentSites' => $currentSites
        ]);
    }

    public function synchronizeSite(Request $request)
    {
        $server = Server::query()->where('ploi_id', $request->input('server_id'))->firstOrFail();

        $site = Site::query()
            ->updateOrCreate([
                'ploi_id' => $request->input('id')
            ], [
                'domain' => $request->input('domain'),
                'php_version' => $request->input('php_version'),
            ]);

        $site->status = $request->input('status');
        $site->server_id = $server->id;
        $site->save();
    }

    public function synchronizeAll(Request $request)
    {
        $availableSites = $this->getPloi()->synchronize()->sites()->getData();

        foreach ($availableSites as $availableSite) {
            $server = Server::query()->where('ploi_id', $availableSite->server_id)->firstOrFail();

            $site = Site::query()
                ->updateOrCreate([
                    'ploi_id' => $availableSite->server_id
                ], [
                    'domain' => $availableSite->domain,
                    'php_version' => $availableSite->php_version,
                ]);

            $site->status = $availableSite->status;
            $site->server_id = $server->id;
            $site->save();
        }
    }
}
