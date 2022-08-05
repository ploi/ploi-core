<?php

namespace App\Policies;

use App\Models\Cronjob;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class CronjobPolicy
{
    use HandlesAuthorization;

    public function viewAny(User $user): bool
    {
        return $user->isAdmin();
    }

    public function view(User $user, Cronjob $cronjob): bool
    {
        return $user->isAdmin();
    }

    public function create(User $user): bool
    {
        return false;
    }

    public function update(User $user, Cronjob $cronjob): bool
    {
        return false;
    }

    public function delete(User $user, Cronjob $cronjob): bool
    {
        return false;
    }

    public function restore(User $user, Cronjob $cronjob): bool
    {
        return false;
    }

    public function forceDelete(User $user, Cronjob $cronjob): bool
    {
        return false;
    }
}
