<?php

namespace App\Http\Requests;

use Illuminate\Validation\Rule;
use App\Rules\LetsEncryptMatchHostWithIp;
use Illuminate\Foundation\Http\FormRequest;

class SiteCertificateRequest extends FormRequest
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
        $rules = [];

        if ($this->input('type') === 'letsencrypt') {
            $rules = [
                'domain' => [
                    'required',
                    'string',
                    Rule::unique('certificates', 'domain')->where(function ($query) {
                        return $query->where('site_id', $this->route('site'));
                    }),
                    new LetsEncryptMatchHostWithIp($this->route('site'))
                ]
            ];
        }

        if ($this->input('type') === 'custom') {
            $rules = [
                'certificate' => [
                    'required',
                    'string',
                    'min:5'
                ],
                'private' => [
                    'required',
                    'string',
                    'min:5'
                ]
            ];
        }

        return $rules;
    }
}
