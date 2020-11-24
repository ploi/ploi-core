<?php

namespace App\Http\Requests;

use App\Models\UserProvider;
use App\Rules\CloudflareGeneralTest;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ProfileIntegrationRequest extends FormRequest
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
        $rules = [
            'provider' => [
                'required',
                'string',
                Rule::in([
                    UserProvider::TYPE_CLOUDFLARE
                ])
            ]
        ];

        if ($this->input('provider') === UserProvider::TYPE_CLOUDFLARE) {
            $rules['meta.api_key'] = [
                'required',
                'string',
                new CloudflareGeneralTest($this->input('meta.cloudflare_email'))
            ];

            $rules['meta.cloudflare_email'] = [
                'required',
                'string',
                'email'
            ];
        }

        return $rules;
    }

    public function messages()
    {
        return [
            'meta.api_key.required' => __('The API key field is required'),
            'meta.cloudflare_email.required' => __('The Cloudflare email field is required'),
        ];
    }
}
