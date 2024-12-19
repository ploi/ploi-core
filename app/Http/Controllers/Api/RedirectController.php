<?php

namespace App\Http\Controllers\Api;

use App\Models\Site;
use App\Models\Server;
use App\Models\Redirect;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;
use App\Jobs\Redirects\DeleteRedirect;
use App\DataTransferObjects\RedirectData;
use App\Actions\Redirect\CreateRedirectAction;

class RedirectController extends Controller
{
    public function index(Site $site): mixed
    {
        return RedirectData::collection(Redirect::where('site_id', $site->id)->paginate());
    }

    public function store(Request $request, Server $server, Site $site): Response|JsonResponse
    {
        $data = $request->validate([
            'redirect_from' => ['required', 'string', 'max:255'],
            'redirect_to'   => ['required', 'string', 'max:255'],
            'type'          => ['required', 'string', 'in:permanent,redirect'],
            'user_id'       => ['required'],
        ]);

        $redirect = app(CreateRedirectAction::class)->execute(
            RedirectData::validateAndCreate(array_merge($data, [
                'site_id'   => $site->id,
                'server_id' => $server->id,
            ]))
        );

        $redirect->refresh();

        return response(content: ['data' => RedirectData::from($redirect)->toArray(),], status: 201);
    }

    public function show(Site $site, Redirect $redirect): RedirectData
    {
        if ($redirect->site_id !== $site->id) {
            abort(404);
        }

        return RedirectData::from($redirect);
    }

    public function destroy(Server $server, Site $site, Redirect $redirect): Response
    {
        if ($redirect->site_id !== $site->id) {
            abort(404);
        }

        dispatch(new DeleteRedirect(
            $site->server->ploi_id,
            $site->ploi_id,
            $redirect->ploi_id
        ));

        $redirect->delete();


        return response(status: 200);
    }

}
