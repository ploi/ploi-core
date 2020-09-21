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
            'enable_api' => setting('enable_api'),
            'api_token' => setting('api_token'),
        ];

        $packages = Package::pluck('name', 'id');

        return inertia('Admin/Settings', [
            'company_settings' => $settings,
            'packages' => $packages
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
            'enable_api',
            'api_token',
        ]) as $key => $value) {
            setting([$key => $value]);
        }

        cache()->forget('core.settings');

        return redirect()->route('admin.settings')->with('success', __('Settings have been updated'));
    }
}
