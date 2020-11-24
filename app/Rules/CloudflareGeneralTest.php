<?php

namespace App\Rules;

use App\Services\Cloudflare;
use Illuminate\Contracts\Validation\Rule;

class CloudflareGeneralTest implements Rule
{
    public $cloudflareEmail;

    /**
     * Create a new rule instance.
     *
     * @param $cloudflareEmail
     */
    public function __construct($cloudflareEmail)
    {
        $this->cloudflareEmail = $cloudflareEmail;
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
        if (!$this->cloudflareEmail) {
            return false;
        }

        try {
            $cloudflare = new Cloudflare($this->cloudflareEmail, $value);

            if ($cloudflare->user()) {
                return true;
            }
        } catch (\Exception $e) {
            return false;
        }

        return false;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return __('We could not authenticate you with Cloudflare, are you sure this is the right API key? Also make sure your profile e-mail matches the one in Cloudflare.');
    }
}
