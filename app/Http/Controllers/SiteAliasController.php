<?php

namespace App\Http\Controllers;

use App\Jobs\Aliases\CreateAlias;
use App\Jobs\Aliases\DeleteAlias;
use App\Http\Requests\SiteAliasRequest;

class SiteAliasController extends Controller
{
    public function index($id)
    {
        $site = auth()->user()->sites()->findOrFail($id);

        return inertia('Sites/Aliases', [
            'site' => $site,
            'aliases' => $site->aliases
        ]);
    }

    public function store(SiteAliasRequest $request, $id)
    {
        $site = $request->user()->sites()->findOrFail($id);

        $site->addAlias($request->input('domain'));

        dispatch(new CreateAlias($site, $request->input('domain'), $request->boolean('request_new_certificate')));

        return redirect()->route('sites.aliases.index', $id)->with('success', __('Alias has been created'));
    }

    public function destroy($id, $alias)
    {
        $site = auth()->user()->sites()->findOrFail($id);

        dispatch(new DeleteAlias($site, $alias));

        $site->removeAlias($alias);

        return redirect()->route('sites.aliases.index', $id)->with('success', __('Alias has been deleted'));
    }
}
