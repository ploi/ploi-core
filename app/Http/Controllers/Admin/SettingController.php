<?php

namespace App\Http\Controllers\Admin;

use App\Models\Package;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\SettingRequest;

class SettingController extends Controller
{
    public function index()
    {
        $settings = [
            'name' => setting('name'),
            'email' => setting('email'),
            'support_emails' => setting('support_emails'),
            'support' => setting('support'),
            'documentation' => setting('documentation'),
            'allow_registration' => setting('allow_registration'),
            'default_package' => setting('default_package'),
            'receive_email_on_server_creation' => setting('receive_email_on_server_creation'),
            'isolate_per_site_per_user' => setting('isolate_per_site_per_user'),
            'enable_api' => setting('enable_api'),
            'api_token' => setting('api_token') ? decrypt(setting('api_token')) : null,
            'default_language' => setting('default_language', 'en')
        ];

        $packages = Package::pluck('name', 'id');

        return inertia('Admin/Settings', [
            'company_settings' => $settings,
            'packages' => $packages,
            'languages' => languages()
        ]);
    }

    public function update(SettingRequest $request)
    {
        foreach ($request->only([
            'name',
            'email',
            'support',
            'support_emails',
            'allow_registration',
            'documentation',
            'default_package',
            'receive_email_on_server_creation',
            'isolate_per_site_per_user',
            'enable_api',
            'api_token',
            'default_language'
        ]) as $key => $value) {
            if ($key === 'api_token') {
                $value = encrypt($value);
            }

            setting([$key => $value]);
        }

        cache()->forget('core.settings');

        return redirect()->route('admin.settings')->with('success', __('Settings have been updated'));
    }
}
