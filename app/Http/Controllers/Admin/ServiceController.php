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
            'servers' => Server::query()->withCount('sites', 'users')->latest()->paginate(config('core.pagination.per_page'), ['*'], 'servers_per_page'),
            'sites' => Site::with('server:id,name')->withCount('users')->latest()->paginate(config('core.pagination.per_page'), ['*'], 'sites_per_page'),
            'providers' => Provider::query()
                ->withCount('regions', 'plans', 'servers')
                ->latest()
                ->paginate(config('core.pagination.per_page'), ['*'], 'providers_per_page'),
        ]);
    }
}
