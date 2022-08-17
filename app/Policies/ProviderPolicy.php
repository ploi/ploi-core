<?php

namespace App\Policies;

use App\Models\User;
use App\Models\Provider;
use Illuminate\Auth\Access\Response;
use Illuminate\Auth\Access\HandlesAuthorization;

class ProviderPolicy extends FrontendOnlyPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any models.
     *
     * @param User $user
     * @return Response|bool
     */
    public function viewAny(User $user)
    {
        return $user->isAdmin();
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param User $user
     * @param Provider $provider
     * @return Response|bool
     */
    public function view(User $user, Provider $provider)
    {
        return $user->isAdmin();
    }

    /**
     * Determine whether the user can create models.
     *
     * @param User $user
     * @return Response|bool
     */
    public function create(User $user)
    {
        return false;
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param User $user
     * @param Provider $provider
     * @return Response|bool
     */
    public function update(User $user, Provider $provider)
    {
        return true;
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param User $user
     * @param Provider $provider
     * @return Response|bool
     */
    public function delete(User $user, Provider $provider)
    {
        return false;
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param User $user
     * @param Provider $provider
     * @return Response|bool
     */
    public function restore(User $user, Provider $provider)
    {
        return false;
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param User $user
     * @param Provider $provider
     * @return Response|bool
     */
    public function forceDelete(User $user, Provider $provider)
    {
        return false;
    }
}
