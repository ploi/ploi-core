<?php

namespace App\Http\Controllers;

use App\Jobs\Cronjobs\CreateCronjob;
use App\Jobs\Cronjobs\DeleteCronjob;
use App\Http\Requests\SiteCronjobRequest;
use App\Http\Resources\SiteCronjobResource;

class SiteCronjobController extends Controller
{
    public function index($id)
    {
        $site = auth()->user()->sites()->findOrFail($id);

        return inertia('Sites/Cronjobs', [
            'site' => $site,
            'cronjobs' => SiteCronjobResource::collection($site->cronjobs()->latest()->paginate())
        ]);
    }

    public function store(SiteCronjobRequest $request, $id)
    {
        $site = auth()->user()->sites()->findOrFail($id);

        $cronjob = $site->cronjobs()->create([
            'command' => $request->input('command'),
            'frequency' => $request->input('frequency')
        ]);

        $cronjob->server_id = $site->server_id;
        $cronjob->save();

        dispatch(new CreateCronjob($cronjob));

        $request->user()->systemLogs()->create([
            'title' => 'New cronjob created',
            'description' => 'A new cronjob has been created'
        ])->model()->associate($cronjob)->save();

        return redirect()->route('sites.cronjobs.index', $id)->with('success', __('New cronjob has been created'));
    }

    public function destroy($id, $cronjobId)
    {
        $site = auth()->user()->sites()->findOrFail($id);

        $cronjob = $site->cronjobs()->findOrFail($cronjobId);

        dispatch(new DeleteCronjob($site->server->ploi_id, $cronjob->ploi_id));

        $cronjob->delete();

        return redirect()->route('sites.cronjobs.index', $id)->with('success', __('Cronjob has been deleted'));
    }
}
