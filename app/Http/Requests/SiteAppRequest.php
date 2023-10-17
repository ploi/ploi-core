<?php

namespace App\Http\Requests;

use App\Models\Site;
use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class SiteAppRequest extends FormRequest
{
    public function authorize(): bool
    {
        return auth()->check();
    }

    public function rules(): array
    {
        return [
            'type' => [
                'required',
                'string',
                Rule::in([
                    Site::PROJECT_WORDPRESS,
                    Site::PROJECT_NEXTCLOUD,
                ])
            ]
        ];
    }
}
