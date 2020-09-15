<?php

namespace App\Http\Requests;

use App\Models\Site;
use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class SiteAppRequest extends FormRequest
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
            'type' => [
                'required',
                'string',
                Rule::in([
                    Site::PROJECT_WORDPRESS,
                    Site::PROJECT_NEXTCLOUD,
                    Site::PROJECT_OCTOBERCMS
                ])
            ]
        ];
    }
}
