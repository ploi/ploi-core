<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;

class Hostname implements Rule
{
    public $strict;

    /**
     * Create a new rule instance.
     *
     * @param bool $strict
     */
    public function __construct($strict = true)
    {
        $this->strict = $strict;
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param string $attribute
     * @param mixed $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        if ($this->strict) {
            return preg_match("/^(?!\-)(?:[a-zA-Z\d\-]{0,62}[a-zA-Z\d]\.){1,126}(?!\d+)[a-zA-Z\d]{1,63}$/", $value);
        }

        return preg_match("/^(\*\.)?(?:[a-zA-Z\d\-]{0,62}[a-zA-Z\d]\.){1,126}(?!\d+)[a-zA-Z\d]{1,63}$/", $value);
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return __('The domain is not a valid hostname.');
    }
}
