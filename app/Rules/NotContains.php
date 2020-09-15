<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;

class NotContains implements Rule
{
    public $contains;

    /**
     * Create a new rule instance.
     *
     * @param null $contains
     */
    public function __construct($contains = null)
    {
        $this->contains = $contains;
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string $attribute
     * @param  mixed  $value
     *
     * @return bool
     */
    public function passes($attribute, $value)
    {
        if (!$this->contains) {
            return true;
        }

        if (str_contains($value, $this->contains)) {
            return false;
        }

        return true;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'This value cannot contain a "' . $this->contains . '" character.';
    }
}
