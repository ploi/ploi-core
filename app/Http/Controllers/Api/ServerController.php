<?php

namespace App\Http\Controllers\Api;

use App\Actions\Server\CreateServerAction;
use App\DataTransferObjects\ServerData;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ServerController extends Controller
{
    public function create(Request $request): Response
    {
        $server = app(CreateServerAction::class)->execute(ServerData::validate($request));

        return response(content: ['data' => ServerData::from($server)->toArray()], status: 201);
    }
}
