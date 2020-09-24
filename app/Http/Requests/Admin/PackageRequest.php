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
            'server_permissions' => [
                'array'
            ],
            'site_permissions' => [
                'array'
            ]
        ];
    }
}
