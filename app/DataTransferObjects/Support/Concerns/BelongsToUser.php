<?php

namespace App\DataTransferObjects\Support\Concerns;

use App\Models\User;

trait BelongsToUser
{
    public function getUser(): ?User
    {
        return User::find($this->user_id);
    }
}
