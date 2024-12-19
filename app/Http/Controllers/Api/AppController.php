<?php

namespace App\Http\Controllers\Api;

use App\Models\Site;
use App\Models\Server;
use Illuminate\Http\Request;
use App\Jobs\Apps\UninstallApp;
use App\DataTransferObjects\AppData;
use App\Http\Controllers\Controller;
use App\Actions\Site\InstallAppAction;

class AppController extends Controller
{
    public function store(Request $request, Server $server, Site $site)
    {
        $data = $request->validate([
            'user_id'         => ['required'],
            'type'            => ['required', 'in:wordpress,nextcloud'],
            'create_database' => ['boolean'],
            'options'         => ['array'],
        ]);

        $app = app(InstallAppAction::class)->execute(
            AppData::validateAndCreate(array_merge($data, [
                'site_id'   => $site->id,
                'server_id' => $server->id,
            ]))
        );

        $app->refresh();


        return response(content: ['data' => AppData::from($app)->toArray(),], status: 201);
    }

    public function destroy(Server $server, Site $site)
    {
        if ($site->server_id !== $server->id) {
            abort(404);
        }

        dispatch(new UninstallApp($site));

        return response(status: 200);
    }
}
