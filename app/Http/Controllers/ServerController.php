<?php

namespace App\Http\Controllers;

use App\Jobs\Servers\DeleteServer;
use App\Models\Server;
use Illuminate\Http\Request;
use App\Http\Resources\ServerResource;

class ServerController extends Controller
{
    public function index()
    {
        $servers = auth()->user()->servers()->latest()->paginate();

        return inertia('Servers/Index', [
            'servers' => ServerResource::collection($servers)
        ]);
    }

    public function store(Request $request)
    {
        abort_if(!$request->user()->can('create', Server::class), 403);

        // TODO
    }

    public function show($id)
    {
        $server = auth()->user()->servers()->findOrFail($id);

        return inertia('Servers/Show', [
            'server' => $server,
            'sites' => $server->sites()->latest()->paginate(5, ['*'], 'sites_per_page'),
        ]);
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
}
