<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Server;
use App\Models\Site;
use App\Services\Ploi\Ploi;
use Illuminate\Http\Request;

class SynchronizeSiteController extends Controller
{
    public function index()
    {
        if ($this->isDemo()) {
            return redirect('/')->with('info', __('This feature is not available in demo mode.'));
        }

        $ploi = new Ploi(config('services.ploi.token'));

        $availableSites = $ploi->synchronize()->sites()->getData();

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
        $server = Server::where('ploi_id', $request->input('server_id'))->firstOrFail();

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
}
