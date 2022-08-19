<?php

namespace App\Policies;

use App\Models\User;
use App\Models\ProviderRegion;
use Illuminate\Auth\Access\HandlesAuthorization;

class ProviderRegionPolicy extends FrontendOnlyPolicy
{
    use HandlesAuthorization;

    public function viewAny(User $user): bool
    {
        return $user->isAdmin();
    }

    public function view(User $user, ProviderRegion $providerRegion): bool
    {
        return $user->isAdmin();
    }

    public function create(User $user): bool
    {
        return false;
    }

    public function update(User $user, ProviderRegion $providerRegion): bool
    {
        return false;
    }

    public function delete(User $user, ProviderRegion $providerRegion): bool
    {
        return false;
    }

    public function restore(User $user, ProviderRegion $providerRegion): bool
    {
        return false;
    }

    public function forceDelete(User $user, ProviderRegion $providerRegion): bool
    {
        return false;
    }
}
