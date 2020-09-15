<?php

namespace App\Http\Controllers\Admin;

use App\Jobs\Core\UpdateSystem;
use App\Services\VersionChecker;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SystemController extends Controller
{
    public function index()
    {
        if (config('app.demo')) {
            return redirect('/')->with('info', __('This feature is not available in demo mode.'));
        }

        $version = (new VersionChecker)->getVersions();

        return inertia('Admin/System', [
            'version' => [
                'out_of_date' => $version->isOutOfDate(),
                'current' => $version->currentVersion,
                'remote' => $version->remoteVersion
            ]
        ]);
    }

    public function update(Request $request)
    {
        dispatch(new UpdateSystem);

        return redirect()->route('admin.system')->with('success', __('System update has been dispatched, this could take around 2/3 minutes for it to complete'));
    }
}
