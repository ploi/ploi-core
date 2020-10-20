<?php

namespace App\Policies;

use App\Models\User;
use Illuminate\Support\Arr;
use Illuminate\Auth\Access\HandlesAuthorization;

class ServerPolicy
{
    use HandlesAuthorization;

    public function create(User $user)
    {
        return Arr::get($user->package->server_permissions, 'create', false);
    }

    public function update(User $user)
    {
        return Arr::get($user->package->server_permissions, 'update', false);
    }

    public function delete(User $user)
    {
        return Arr::get($user->package->server_permissions, 'delete', false);
    }
}
