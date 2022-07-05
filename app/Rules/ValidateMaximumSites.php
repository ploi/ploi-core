<?php

namespace App\Rules;

use App\Models\User;
use Illuminate\Contracts\Validation\Rule;
use Illuminate\Contracts\Validation\DataAwareRule;

class ValidateMaximumSites implements Rule, DataAwareRule
{
    protected array $data;

    public function setData($data): static
    {
        $this->data = $data;

        return $this;
    }

    protected function getUser(): User
    {
        return $this->data['user_id'] ?? null
                ? User::find($this->data['user_id'])
                : auth()->user();
    }

    public function passes($attribute, $value)
    {
        $package = $this->getUser()->package;

        // If the user does not have a package, it can continue
        if (! $package) {
            return true;
        }

        // If we have unlimited sites
        if ($package->maximum_sites === 0) {
            return true;
        }

        if ($package->maximum_sites <= $this->getUser()->sites()->count()) {
            return false;
        }

        return true;
    }

    public function message()
    {
        return __('You have reached the maximum limit of sites you can have on your package.');
    }
}
