<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Controllers\Controller;
use App\DataTransferObjects\UserData;
use App\DataTransferObjects\Support\DataCollection;

class UserController extends Controller
{
    public function index(): DataCollection
    {
        return UserData::collection(User::latest()->paginate());
    }

    public function store(Request $request): Response
    {
        $userData = UserData::validate($request->only('name', 'email'));

        $user = User::create($userData->toArray());

        return response(
            content: ['data' => UserData::from($user)],
            status: 201
        );
    }

    public function show(User $user): Response
    {
        return response(content: ['data' => UserData::from($user)], status: 200);
    }
}
