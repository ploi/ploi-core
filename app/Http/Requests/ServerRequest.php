<?php

namespace App\Http\Requests;

use App\Models\Server;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ServerRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return dump($this->user()->can('create', Server::class));
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [

        ];
        return [
            'name' => [
                'required',
                'string',
                'alpha_dash',
                'max:40'
            ],
            'provider' => [
                'required',
                'not_in:0',
                'exists:provider_plans,id'
            ],
            'region' => [
                'required',
                'not_in:0',
                'exists:provider_regions,id'
            ],
            'plan' => [
                'required',
                'not_in:0',
                'exists:provider_plans,id'
            ],
            'database_type' => [
                'required',
                'string',
                Rule::in(['mysql', 'mariadb', 'postgresql', 'postgresql13'])
            ]
        ];
    }
}
