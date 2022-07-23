<?php

namespace App\Http\Controllers\Api;

use App\Actions\Server\CreateServerAction;
use App\DataTransferObjects\ServerData;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ServerController extends Controller
{
    public function store(Request $request): Response
    {
        $data = $request->validate([
            'name' => ['required'],
            'provider_id' => ['required'],
            'provider_region_id' => ['required'],
            'provider_plan_id' => ['required'],
            'database_type' => ['required'],
            'user_id' => ['required'],
        ]);

        $server = app(CreateServerAction::class)->execute(
            ServerData::validate($data)
        );

        return response(content: ['data' => ServerData::from($server->refresh())->toArray()], status: 201);
    }
}
