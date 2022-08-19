<?php

namespace App\Http\Requests;

use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class SiteDnsRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return auth()->check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'type' => [
                'required',
                Rule::in([
                    'A',
                    'AAAA',
                    'CNAME',
                    'HTTPS',
                    'TXT',
                    'SRV',
                    'LOC',
                    'MX',
                    'NS',
                    'CERT',
                    'DNSKEY',
                    'DS',
                    'NAPTR',
                    'SMIMEA',
                    'SSHFP',
                    'SVCB',
                    'TLSA',
                ])
            ],
            'name' => [
                'required',
                'string',
            ],
            'content' => [
                'required',
                'ipv4'
            ],
            'ttl' => [
                'required',
                'numeric',
                // TTL must be between 60 and 86400 seconds, or 1 for Automatic.
                Rule::in(array_merge([1], range(60, 86400))),
            ]
        ];
    }
}
