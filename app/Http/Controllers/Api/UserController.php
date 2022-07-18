<?php

namespace App\Http\Controllers\Api;

use App\DataTransferObjects\UserData;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Arr;

class UserController extends Controller
{
    public function index(): mixed
    {
        return UserData::collection(User::latest()->paginate());
    }

    public function show(User $user): Response
    {
        return response(content: ['data' => UserData::from($user)], status: 200);
    }

    public function store(Request $request): Response
    {
        $data = $request->validate([
            'name' => ['required'],
            'email' => ['required'],
            'package_id' => ['nullable'],
        ]);

        $userData = UserData::validate($data);

        $user = User::create($userData->toArray());

        return response(content: ['data' => UserData::from($user)], status: 201);
    }

    public function update(User $user, Request $request): Response
    {
        $data = $request->validate([
            'name' => [],
            'email' => [],
            'package_id' => [],
            'blocked' => [],
        ]);

        $userData = UserData::validate($data);

        $user->update(
            Arr::only($userData->toArray(), array_keys($data))
        );

        return response(content: ['data' => UserData::from($user)], status: 200);
    }

    public function destroy(User $user): Response
    {
        $user->delete();

        return response(status: 200);
    }
}
