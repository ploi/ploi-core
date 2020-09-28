<?php

namespace App\Http\Requests;

use App\Models\Site;
use App\Rules\Hostname;
use App\Rules\ValidateMaximumSites;
use Illuminate\Foundation\Http\FormRequest;

class SiteRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return $this->user()->can('create', Site::class);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'domain' => [
                'required',
                'string',
                new Hostname,
                new ValidateMaximumSites
            ],
        ];
    }
}
