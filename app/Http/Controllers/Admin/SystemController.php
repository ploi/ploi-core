<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Jobs\Core\UpdateSystem;
use App\Services\VersionChecker;
use App\Http\Controllers\Controller;
use Laravel\Horizon\Contracts\MasterSupervisorRepository;

class SystemController extends Controller
{
    public function index(MasterSupervisorRepository $masterSupervisorRepository)
    {
        $version = (new VersionChecker)->getVersions();

        return inertia('Admin/System', [
            'version' => [
                'out_of_date' => $version->isOutOfDate(),
                'current' => $version->currentVersion,
                'remote' => $version->remoteVersion
            ],
            'horizonRunning' => !!$masterSupervisorRepository->all()
        ]);
    }

    public function update(Request $request)
    {
        dispatch(new UpdateSystem);

        return redirect()->route('admin.system')->with('success', __('System update has been dispatched, this could take around 2/3 minutes for it to complete'));
    }
}
