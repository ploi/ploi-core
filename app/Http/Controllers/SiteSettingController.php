<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Jobs\Sites\ChangePhpVersion;

class SiteSettingController extends Controller
{
    public function show($id)
    {
        $site = auth()->user()->sites()->findOrFail($id);

        $this->authorize('update', $site);

        $availablePhpVersions = $site->server->available_php_versions;

        return inertia('Sites/Settings', [
            'site' => $site,
            'available_php_versions' => $availablePhpVersions
        ]);
    }

    public function update(Request $request, $id)
    {
        $site = $request->user()->sites()->findOrFail($id);

        $this->authorize('update', $site);

        $site->update($request->all());

        return redirect()->route('sites.settings.show', $id)->with('success', __('Site settings have been updated'));
    }

    public function changePhpVersion(Request $request, $id)
    {
        $site = $request->user()->sites()->findOrFail($id);

        $this->authorize('update', $site);

        dispatch(new ChangePhpVersion($site, $request->input('version')));

        $request->user()->systemLogs()->create([
            'title' => 'Site PHP version has changed',
            'description' => 'PHP version changed for site :site'
        ])->model()->associate($site)->save();

        return redirect()->route('sites.settings.show', $id)->with('success', __('Site PHP version is changing'));
    }
}
