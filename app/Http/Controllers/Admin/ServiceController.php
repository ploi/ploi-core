<?php

namespace App\Http\Controllers\Admin;

use App\Models\Site;
use App\Models\Server;
use App\Http\Controllers\Controller;

class ServiceController extends Controller
{
    public function index()
    {
        return inertia('Admin/Services/Index', [
            'servers' => Server::withCount('sites')->latest()->paginate(5, ['*'], 'servers_per_page'),
            'sites' => Site::with('server:id,name')->latest()->paginate(5, ['*'], 'sites_per_page'),
        ]);
    }
}
