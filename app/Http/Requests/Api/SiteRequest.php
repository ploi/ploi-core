<?php

namespace App\Http\Requests\Api;

use Illuminate\Foundation\Http\FormRequest;

class SiteRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'server_id'
        ];
    }
}
