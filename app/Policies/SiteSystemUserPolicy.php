<?php

namespace App\Policies;

use App\Models\User;
use App\Models\SiteSystemUser;
use Illuminate\Auth\Access\HandlesAuthorization;

class SiteSystemUserPolicy
{
    use HandlesAuthorization;

    public function viewAny(User $user): bool
    {
        return $user->isAdmin();
    }

    public function view(User $user, SiteSystemUser $siteSystemUser): bool
    {
        return $user->isAdmin();
    }

    public function create(User $user): bool
    {
        return false;
    }

    public function update(User $user, SiteSystemUser $siteSystemUser): bool
    {
        return false;
    }

    public function delete(User $user, SiteSystemUser $siteSystemUser): bool
    {
        return false;
    }

    public function restore(User $user, SiteSystemUser $siteSystemUser): bool
    {
        return false;
    }

    public function forceDelete(User $user, SiteSystemUser $siteSystemUser): bool
    {
        return false;
    }
}
