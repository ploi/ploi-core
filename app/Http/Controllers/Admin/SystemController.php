<?php

namespace App\Http\Controllers\Admin;

use Inertia\Response;
use Illuminate\Http\Request;
use App\Jobs\Core\UpdateSystem;
use App\Services\VersionChecker;
use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Laravel\Horizon\Contracts\MasterSupervisorRepository;

class SystemController extends Controller
{
    public function index(Request $request, MasterSupervisorRepository $masterSupervisorRepository): Response|RedirectResponse
    {
        if ($request->input('flush', false)) {
            app(VersionChecker::class)->flushVersionData();

            return redirect()->route('admin.system')->with('success', __('Refreshed versions'));
        }

        $version = app(VersionChecker::class)->getVersions();

        return inertia('Admin/System', [
            'version' => [
                'out_of_date' => $version->isOutOfDate(),
                'current' => $version->currentVersion,
                'remote' => $version->remoteVersion
            ],
            'horizonRunning' => (bool) $masterSupervisorRepository->all(),
        ]);
    }

    public function update(Request $request): RedirectResponse
    {
        dispatch(new UpdateSystem);

        return redirect()->route('admin.system')->with('success', __('System update has been dispatched, this could take around 2/3 minutes for it to complete'));
    }
}
