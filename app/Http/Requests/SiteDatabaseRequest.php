<?php

namespace App\Http\Requests;

use App\Rules\NotContains;
use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class SiteDatabaseRequest extends FormRequest
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
            'name' => [
                'required',
                'string',
                'alpha_dash',
                'min:2',
                'max:64',
                Rule::unique('databases')->where(function ($query) {
                    return $query->where('site_id', $this->route('site'));
                }),
                Rule::notIn([
                    'database',
                    'ploi',
                    'information_schema',
                    'performance_schema',
                    'sys'
                ]),
                new NotContains('-'),
            ],
            'user_name' => [
                'sometimes',
                'nullable',
                'string',
                'alpha_dash',
                'min:2',
                'max:64',
                new NotContains('-'),
                Rule::notIn([
                    'root',
                    'ploi'
                ])
            ],
            'password' => [
                'sometimes',
                'nullable',
                'string',
            ],
        ];
    }
}
