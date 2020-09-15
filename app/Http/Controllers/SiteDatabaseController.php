<?php

namespace App\Http\Controllers;

use App\Jobs\Databases\CreateDatabase;
use App\Jobs\Databases\DeleteDatabase;
use App\Http\Requests\SiteDatabaseRequest;
use App\Http\Resources\SiteDatabaseResource;

class SiteDatabaseController extends Controller
{
    public function index($id)
    {
        $site = auth()->user()->sites()->findOrFail($id);

        return inertia('Sites/Databases', [
            'site' => $site,
            'databases' => SiteDatabaseResource::collection($site->databases()->latest()->paginate())
        ]);
    }

    public function store(SiteDatabaseRequest $request, $id)
    {
        $site = auth()->user()->sites()->findOrFail($id);

        $database = $site->databases()->create([
            'name' => $request->input('name')
        ]);

        $database->users()->create([
            'name' => $request->input('user_name'),
        ]);

        $database->server_id = $site->server_id;
        $database->save();

        dispatch(new CreateDatabase($database, $request->input('password')));

        $request->user()->systemLogs()->create([
            'title' => 'New database :database created',
            'description' => 'A new database has been created'
        ])->model()->associate($database)->save();

        return redirect()->route('sites.databases.index', $id)->with('success', __('New database has been created'));
    }

    public function destroy($id, $databaseId)
    {
        $site = auth()->user()->sites()->findOrFail($id);

        $database = $site->databases()->findOrFail($databaseId);

        dispatch(new DeleteDatabase($site->server->ploi_id, $database->ploi_id));

        $database->delete();

        return redirect()->route('sites.databases.index', $id)->with('success', __('Database has been deleted'));
    }
}
