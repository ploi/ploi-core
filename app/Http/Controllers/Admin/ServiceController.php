<?php

namespace App\Http\Controllers\Admin;

use App\Models\Site;
use App\Models\Server;
use App\Models\Provider;
use App\Http\Controllers\Controller;

class ServiceController extends Controller
{
    public function index()
    {
        return inertia('Admin/Services/Index', [
            'servers' => Server::withCount('sites')->latest()->paginate(5, ['*'], 'servers_per_page'),
            'sites' => Site::with('server:id,name')->latest()->paginate(5, ['*'], 'sites_per_page'),
            'providers' => Provider::query()
                ->withCount('regions', 'plans', 'servers')
                ->latest()
                ->paginate(5, ['*'], 'providers_per_page'),
        ]);
    }
}
