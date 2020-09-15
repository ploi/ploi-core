<?php

namespace App\Http\Controllers\Admin;

use App\Models\Server;
use App\Services\Ploi\Ploi;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SynchronizeServerController extends Controller
{
    public function index()
    {
        if (config('app.demo')) {
            return redirect('/')->with('info', __('This feature is not available in demo mode.'));
        }

        $ploi = new Ploi(config('services.ploi.token'));

        $availableServers = $ploi->synchronize()->servers()->getData();

        $currentServers = Server::whereNotIn('id', array_keys((array)$availableServers))->get();

        return inertia('Admin/Services/Servers', [
            'availableServers' => $availableServers,
            'currentServers' => $currentServers
        ]);
    }

    public function synchronizeServer(Request $request)
    {
        Server::updateOrCreate([
            'ploi_id' => $request->input('id')
        ], [
            'status' => $request->input('status'),
            'name' => $request->input('name'),
            'ip' => $request->input('ip_address'),
            'ssh_port' => $request->input('ssh_port', 22),
            'internal_ip' => $request->input('internal_ip'),
            'available_php_versions' => $request->input('installed_php_versions')
        ]);
    }
}
