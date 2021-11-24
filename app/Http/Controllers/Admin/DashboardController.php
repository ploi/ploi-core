<?php

namespace App\Http\Controllers\Admin;

use App\Models\Site;
use App\Models\User;
use App\Models\Server;
use App\Models\SystemLog;
use App\Http\Controllers\Controller;

class DashboardController extends Controller
{
    public function __invoke()
    {
        return inertia('Admin/Dashboard', [
            'servers' => Server::count(),
            'sites' => Site::count(),
            'users' => User::count(),
            'logs' => SystemLog::query()
                ->latest()
                ->with('model')
                ->paginate(5)
                ->through(function (SystemLog $systemLog) {
                    return [
                        'title' => __($systemLog->title, [
                            'site' => $systemLog->model->domain ?? '-Unknown-'
                        ]),
                        'description' => __($systemLog->description),
                        'created_at_human' => $systemLog->created_at->diffForHumans()
                    ];
                })
        ]);
    }
}
