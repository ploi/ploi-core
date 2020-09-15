<?php

namespace App\Http\Requests;

use App\Rules\StartsWith;
use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class SiteRedirectRequest extends FormRequest
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
            'redirect_from' => [
                'required',
                'string',
                'max:150',
                new StartsWith('/')
            ],
            'redirect_to' => [
                'required',
                'string',
                'max:150',
                new StartsWith(['/', 'http'])
            ],
            'type' => [
                'required',
                'string',
                Rule::in([
                    'redirect',
                    'permanent'
                ])
            ]
        ];
    }
}
