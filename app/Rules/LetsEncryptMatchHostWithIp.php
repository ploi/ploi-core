<?php

namespace App\Rules;

use App\Models\Site;
use Illuminate\Contracts\Validation\Rule;

class LetsEncryptMatchHostWithIp implements Rule
{
    public $server;
    public $withLink;
    public $gluedDomains;

    /**
     * Create a new rule instance.
     *
     * @param $serverId
     * @param bool $withLink
     */
    public function __construct($siteId, $withLink = true)
    {
        $this->server = Site::findOrFail($siteId)->server;

        $this->withLink = $withLink;
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
        $domains = explode(',', $value);

        $passes = false;

        foreach ($domains as $domain) {
            // Replace wildcard to make sure validation works
            $domain = str_replace('*.', '', $domain);

            if (gethostbyname(trim($domain)) == $this->server->ip) {
                $passes = true;
            } else {
                $passes = false;

                // We break right away when we fail to match a domain to the IP.
                break;
            }
        }

        $this->gluedDomains = implode(' ', $domains);

        return $passes;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return __('We were unable to match all of the entered domains to your server, make sure you point your domain DNS to your server.');
    }
}
