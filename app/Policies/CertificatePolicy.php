<?php

namespace App\Policies;

use App\Models\User;
use App\Models\Certificate;
use Illuminate\Auth\Access\HandlesAuthorization;

class CertificatePolicy
{
    use HandlesAuthorization;

    public function viewAny(User $user): bool
    {
        return $user->isAdmin();
    }

    public function view(User $user, Certificate $certificate): bool
    {
        return $user->isAdmin();
    }

    public function create(User $user): bool
    {
        return false;
    }

    public function update(User $user, Certificate $certificate): bool
    {
        return false;
    }

    public function delete(User $user, Certificate $certificate): bool
    {
        return false;
    }

    public function restore(User $user, Certificate $certificate): bool
    {
        return false;
    }

    public function forceDelete(User $user, Certificate $certificate): bool
    {
        return false;
    }
}
