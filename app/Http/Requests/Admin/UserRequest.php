<?php

namespace App\Http\Requests\Admin;

use App\Models\User;
use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
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
            'email' => [
                'required',
                'email:rfc,filter',
                'max:255',
            ],
            'role' => [
                'required',
                Rule::in([
                    User::ADMIN,
                    User::USER,
                ])
            ],
            'language' => [
                'required',
                'string',
                Rule::in(languages()),
            ]
        ];
    }
}
