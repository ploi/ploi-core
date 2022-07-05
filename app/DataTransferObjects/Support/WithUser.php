<?php

namespace App\DataTransferObjects\Support;

use App\Models\User;
use Exception;
use Illuminate\Support\Facades\Auth;

trait WithUser
{
    public function getUser(): ?User
    {
        if (! property_exists($this, 'user_id')) {
            throw new Exception("Cannot retrieve user from " . $this::class);
        }

        return Auth::guest()
            ? User::find($this->user_id)
            : Auth::user();
    }
}
