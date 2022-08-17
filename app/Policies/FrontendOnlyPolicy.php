<?php

namespace App\Policies;

use App\Models\User;

class FrontendOnlyPolicy
{
    public function before(User $user)
    {
        if ($user->isAdmin()) {
            return true;
        }
    }
}
