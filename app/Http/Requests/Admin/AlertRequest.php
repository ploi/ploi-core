<?php

namespace App\Http\Requests\Admin;

use App\Models\Alert;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class AlertRequest extends FormRequest
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
            'message' => [
                'required',
                'string',
                'max:500'
            ],
            'type' => [
                'required',
                'string',
                Rule::in([
                    Alert::TYPE_INFO,
                    Alert::TYPE_DANGER,
                    Alert::TYPE_WARNING
                ])
            ],
            'expires_at' => [
                'nullable',
                'date',
                'date_format:Y-m-d H:i:s'
            ]
        ];
    }
}
