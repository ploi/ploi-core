<?php

namespace App\Policies;

use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;
use Illuminate\Support\Arr;

class ServerPolicy extends FrontendOnlyPolicy
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
