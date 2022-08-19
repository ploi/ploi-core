<?php

namespace App\Policies;

use App\Models\User;
use App\Models\Redirect;
use Illuminate\Auth\Access\HandlesAuthorization;

class RedirectPolicy
{
    use HandlesAuthorization;

    public function viewAny(User $user): bool
    {
        return $user->isAdmin();
    }

    public function view(User $user, Redirect $redirect): bool
    {
        return $user->isAdmin();
    }

    public function create(User $user): bool
    {
        return false;
    }

    public function update(User $user, Redirect $redirect): bool
    {
        return false;
    }

    public function delete(User $user, Redirect $redirect): bool
    {
        return false;
    }

    public function restore(User $user, Redirect $redirect): bool
    {
        return false;
    }

    public function forceDelete(User $user, Redirect $redirect): bool
    {
        return false;
    }
}
