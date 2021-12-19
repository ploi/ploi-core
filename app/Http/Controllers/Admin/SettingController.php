<?php

namespace App\Http\Controllers\Admin;

use App\Models\Package;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
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
            'rotate_logs_after' => setting('rotate_logs_after') ? setting('rotate_logs_after') : null,
            'default_language' => setting('default_language', 'en'),
            'has_logo' => (bool)setting('logo'),
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
            'default_language',
            'rotate_logs_after',
        ]) as $key => $value) {
            if ($key === 'api_token') {
                $value = encrypt($value);
            }

            if ($key === 'default_package' && $value === 'false') {
                $value = null;
            }

            if ($value === 'false') {
                $value = 0;
            }

            if ($value === 'true') {
                $value = 1;
            }

            setting([$key => $value]);
        }

        if ($logo = $request->file('logo')) {
            // If we previously had a logo, rotate that
            if ($oldLogo = setting('logo')) {
                Storage::delete(str_replace('/storage/', '/public/', $oldLogo));
            }

            $version = Str::random();

            $request->file('logo')->storePubliclyAs('logo', 'logo-' . $version . '.' . $request->file('logo')->extension(), 'public');
            setting(['logo' => '/storage/logo/logo-' . $version . '.' . $request->file('logo')->extension()]);
        }

        cache()->forget('core.settings');

        return redirect()->route('admin.settings')->with('success', __('Settings have been updated'));
    }

    public function terms()
    {
        return inertia('Admin/Terms', [
            'terms_settings' => [
                'logo' => setting('logo'),
                'name' => setting('name'),
                'terms_required' => setting('accept_terms_required'),
                'terms' => setting('terms'),
                'privacy' => setting('privacy')
            ]
        ]);
    }

    public function updateTerms(Request $request)
    {
        setting(['accept_terms_required' => $request->input('terms_required'),]);
        setting(['terms' => $request->input('terms'),]);
        setting(['privacy' => $request->input('privacy'),]);

        return redirect()->route('admin.settings.terms')->with('success', __('Terms have been updated'));
    }

    public function termsTemplate(Request $request)
    {
        $template = file_get_contents(storage_path('templates/terms-of-service.md'));
        $template = str_replace([
            '{NAME}',
            '{WEBSITE}',
            '{DATE}'
        ], [
            setting('name'),
            config('app.url'),
            date('Y-m-d')
        ], $template);

        return ['content' => $template];
    }

    public function removeLogo(Request $request)
    {
        Storage::delete(setting('logo'));

        setting(['logo' => null]);

        return redirect()->back()->with('success', 'Logo has ben removed');
    }
}
