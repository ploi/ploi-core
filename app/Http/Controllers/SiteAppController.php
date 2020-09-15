<?php

namespace App\Http\Controllers;

use App\Models\Site;
use App\Jobs\Apps\InstallApp;
use App\Jobs\Apps\UninstallApp;
use App\Http\Requests\SiteAppRequest;

class SiteAppController extends Controller
{
    public function index($id)
    {
        $site = auth()->user()->sites()->findOrFail($id);

        return inertia('Sites/Apps', [
            'site' => $site,
        ]);
    }

    public function store(SiteAppRequest $request, $id)
    {
        $site = $request->user()->sites()->findOrFail($id);

        dispatch(new InstallApp(
            $site,
            $request->input('type', Site::PROJECT_WORDPRESS),
            $request->input('options', [])
        ));

        $site->project = $request->input('type', Site::PROJECT_WORDPRESS);
        $site->save();

        return redirect()->route('sites.apps.index', $site->id)->with('success', __('Application is being installed'));
    }

    public function destroy($id)
    {
        $site = auth()->user()->sites()->findOrFail($id);

        dispatch(new UninstallApp($site));

        return redirect()->route('sites.show', $site->id)->with('success', __('Application is being uninstalled'));
    }
}
