<?php

namespace App\Rules;

use Illuminate\Support\Str;
use Illuminate\Contracts\Validation\Rule;

class StartsWith implements Rule
{
    public $starts;

    public function __toString()
    {
        return 'StartsWith';
    }

    /**
     * Create a new rule instance.
     *
     * @param $starts
     */
    public function __construct($starts)
    {
        $this->starts = $starts;
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
        return Str::startsWith($value, $this->starts);
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        $str = '';
        if (is_array($this->starts)) {
            foreach ($this->starts as $start) {
                $str .= ' ' . $start;
            }
        } else {
            $str = $this->starts;
        }

        return 'The :attribute must start with "' . $str . '"';
    }
}
