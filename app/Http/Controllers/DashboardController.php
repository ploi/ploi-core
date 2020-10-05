<?php

namespace App\Http\Controllers;

use App\Models\SystemLog;

class DashboardController extends Controller
{
    public function index()
    {
        $logs = auth()->user()->systemLogs()
            ->with('model')
            ->latest()
            ->limit(10)
            ->get()
            ->map(function (SystemLog $log) {
                return [
                    'title' => __($log->title, [
                        $log->getKeyFromType() => $log->getTitleDescription(),
                    ]),
                    'description' => __($log->description, [
                        $log->getKeyFromType() => $log->getTitleDescription()
                    ]),
                    'created_at' => $log->created_at,
                    'created_at_human' => $log->created_at->diffForHumans()
                ];
            });

        return inertia('Dashboard/Index', [
            'sites' => auth()->user()->sites()->count(),
            'servers' => auth()->user()->servers()->count(),
            'logs' => $logs,
        ]);
    }
}
