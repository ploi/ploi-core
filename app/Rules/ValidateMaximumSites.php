<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;

class ValidateMaximumSites implements Rule
{
    public function passes($attribute, $value)
    {
        $package = auth()->user()->package;

        // If the user does not have a package, it can continue
        if (!$package) {
            return true;
        }

        // If we have unlimited sites
        if ($package->maximum_sites === 0) {
            return true;
        }

        if ($package->maximum_sites <= auth()->user()->sites()->count()) {
            return false;
        }

        return true;
    }

    public function message()
    {
        return __('You have reached the maximum limit of sites you can have on your package.');
    }
}
