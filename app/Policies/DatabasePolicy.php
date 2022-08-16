<?php

namespace App\Policies;

use App\Models\User;
use App\Models\Database;
use Illuminate\Auth\Access\HandlesAuthorization;

class DatabasePolicy
{
    use HandlesAuthorization;

    public function viewAny(User $user): bool
    {
        return $user->isAdmin();
    }

    public function view(User $user, Database $database): bool
    {
        return $user->isAdmin();
    }

    public function create(User $user): bool
    {
        return false;
    }

    public function update(User $user, Database $database): bool
    {
        return true;
    }

    public function delete(User $user, Database $database): bool
    {
        return false;
    }

    public function restore(User $user, Database $database): bool
    {
        return false;
    }

    public function forceDelete(User $user, Database $database): bool
    {
        return false;
    }
}
