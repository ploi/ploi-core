<?php

namespace App\Http\Controllers;

use App\Jobs\Redirects\CreateRedirect;
use App\Jobs\Redirects\DeleteRedirect;
use App\Http\Requests\SiteRedirectRequest;
use App\Http\Resources\SiteRedirectResource;

class SiteRedirectController extends Controller
{
    public function index($id)
    {
        $site = auth()->user()->sites()->findOrFail($id);

        return inertia('Sites/Redirects', [
            'site' => $site,
            'redirects' => SiteRedirectResource::collection($site->redirects()->latest()->paginate())
        ]);
    }

    public function store(SiteRedirectRequest $request, $id)
    {
        $site = auth()->user()->sites()->findOrFail($id);

        $redirect = $site->redirects()->create([
            'redirect_from' => $request->input('redirect_from'),
            'redirect_to' => $request->input('redirect_to'),
            'type' => $request->input('type', 'redirect')
        ]);

        $redirect->server_id = $site->server_id;
        $redirect->save();

        dispatch(new CreateRedirect($redirect));

        $request->user()->systemLogs()->create([
            'title' => 'New redirect :redirect created',
            'description' => 'A new redirect has been created'
        ])->model()->associate($redirect)->save();

        return redirect()->route('sites.redirects.index', $id)->with('success', __('New redirect has been created'));
    }

    public function destroy($id, $redirectId)
    {
        $site = auth()->user()->sites()->findOrFail($id);

        $redirect = $site->redirects()->findOrFail($redirectId);

        dispatch(new DeleteRedirect(
            $site->server->ploi_id,
            $site->ploi_id,
            $redirect->ploi_id
        ));

        $redirect->delete();

        return redirect()->route('sites.redirects.index', $id)->with('success', __('Redirect has been deleted'));
    }
}
