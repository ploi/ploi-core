<?php

namespace App\Policies;

use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;
use Illuminate\Support\Arr;

class SitePolicy
{
    use HandlesAuthorization;

    public function create(User $user)
    {
        return Arr::get($user->package->site_permissions, 'create', false);
    }

    public function update(User $user)
    {
        return Arr::get($user->package->site_permissions, 'update', false);
    }

    public function delete(User $user)
    {
        return Arr::get($user->package->site_permissions, 'delete', false);
    }
}
