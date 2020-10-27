<?php

namespace App\Http\Requests\Admin;

use App\Models\Package;
use Illuminate\Validation\Rule;
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
            'currency' => [
                'nullable',
                Rule::in([
                    Package::CURRENCY_USD,
                    Package::CURRENCY_EURO,
                    Package::CURRENCY_NOK,
                    Package::CURRENCY_AUD,
                    Package::CURRENCY_CAD,
                ])
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
        $merge = [];

        // If we don't have the monthly price filled in, merge a default
        if (!$this->price_monthly) {
            $merge['price_monthly'] = 0.000;
        }

        // If we don't have the currency filled in, merge a default
        if (!$this->price_monthly) {
            $merge['currency'] = Package::CURRENCY_USD;
        }

        $this->merge($merge);
    }
}
