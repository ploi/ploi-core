<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Server;
use App\Models\Site;
use App\Models\SystemLog;
use App\Models\User;

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
                            'site' => $systemLog->model->domain ?? '-Unknown-',
                        ]),
                        'description' => __($systemLog->description, [
                            'site' => $systemLog->model->domain ?? '-Unknown-',
                        ]),
                        'created_at_huma≥n' => $systemLog->created_at->diffForHumans(),
                    ];
                }),
        ]);
    }
}
