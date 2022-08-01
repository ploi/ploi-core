<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Server;
use Illuminate\Http\Request;

class SynchronizeServerController extends Controller
{
    public function index()
    {
        if ( $this->isDemo() ) {
            return redirect('/')->with('info', __('This feature is not available in demo mode.'));
        }

        $availableServers = $this->getPloi()->synchronize()->servers()->getData();

        $currentServers = Server::query()
            ->whereNotIn('id', array_keys((array) $availableServers))
            ->get();

        return inertia('Admin/Services/Servers', [
            'availableServers' => $availableServers,
            'currentServers' => $currentServers,
        ]);
    }

    public function synchronizeServer(Request $request)
    {
        $this->getPloi()->synchronize()->servers()->getData();
        Server::query()
            ->updateOrCreate([
                'ploi_id' => $request->input('id'),
            ], [
                'status' => $request->input('status'),
                'name' => $request->input('name'),
                'ip' => $request->input('ip_address'),
                'ssh_port' => $request->input('ssh_port', 22),
                'internal_ip' => $request->input('internal_ip'),
                'available_php_versions' => $request->input('installed_php_versions'),
            ]);
    }

    public function synchronizeAll()
    {
        $availableServers = $this->getPloi()->synchronize()->servers()->getData();

        foreach ($availableServers as $availableServer) {
            Server::query()
                ->updateOrCreate([
                    'ploi_id' => $availableServer->id,
                ], [
                    'status' => $availableServer->status,
                    'name' => $availableServer->name,
                    'ip' => $availableServer->ip_address,
                    'ssh_port' => $availableServer->ssh_port,
                    'internal_ip' => $availableServer->internal_ip,
                    'available_php_versions' => $availableServer->installed_php_versions,
                ]);
        }

        return response('ok');
    }
}
