<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class PackageRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return auth()->check() && auth()->user()->isAdmin();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => [
                'required',
                'string',
                'max:255'
            ],
            'maximum_sites' => [
                'required',
                'numeric',
                'min:0',
            ],
            'maximum_servers' => [
                'required',
                'numeric',
                'min:0',
            ],
            'plan_id' => [
                'nullable',
            ],
            'price_monthly' => [
                'nullable',
                'numeric'
            ],
            'server_permissions' => [
                'array'
            ],
            'site_permissions' => [
                'array'
            ]
        ];
    }

    protected function prepareForValidation()
    {
        // If we don't have the monthly price filled in, merge a default
        if (!$this->price_monthly) {
            $this->merge([
                'price_monthly' => 0.000
            ]);
        }
    }
}
