<?php

namespace App\Policies;

use App\Models\User;
use App\Models\ProviderPlan;
use Illuminate\Auth\Access\HandlesAuthorization;

class ProviderPlanPolicy extends FrontendOnlyPolicy
{
    use HandlesAuthorization;

    public function viewAny(User $user): bool
    {
        return $user->isAdmin();
    }

    public function view(User $user, ProviderPlan $providerPlan): bool
    {
        return $user->isAdmin();
    }

    public function create(User $user): bool
    {
        return false;
    }

    public function update(User $user, ProviderPlan $providerPlan): bool
    {
        return false;
    }

    public function delete(User $user, ProviderPlan $providerPlan): bool
    {
        return false;
    }

    public function restore(User $user, ProviderPlan $providerPlan): bool
    {
        return false;
    }

    public function forceDelete(User $user, ProviderPlan $providerPlan): bool
    {
        return false;
    }
}
