<?php

namespace App\Http\Requests;

use App\Rules\Hostname;
use Illuminate\Foundation\Http\FormRequest;

class SiteAliasRequest extends FormRequest
{
    public function authorize()
    {
        return auth()->check();
    }

    public function rules()
    {
        return [
            'domain' => [
                'required',
                'string',
                new Hostname,
            ]
        ];
    }
}
