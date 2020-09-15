<?php

namespace App\Http\Controllers;

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

        return 'test';
    }
}
