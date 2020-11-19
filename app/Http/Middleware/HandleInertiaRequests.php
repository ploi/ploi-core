<?php

namespace App\Http\Middleware;

use App\Models\Alert;
use App\Models\UserProvider;
use Inertia\Middleware;
use Illuminate\Support\Arr;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class HandleInertiaRequests extends Middleware
{
    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     * @param \Illuminate\Http\Request $request
     * @return string|null
     */
    public function version(Request $request)
    {
        return parent::version($request);
    }

    /**
     * Defines the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     * @param \Illuminate\Http\Request $request
     * @return array
     */
    public function share(Request $request)
    {
        return array_merge(parent::share($request), [
            'auth' => function () use ($request) {
                $package = auth()->user()->package ?? [];

                $can = $package ? [
                    'servers' => [
                        'create' => Arr::get($package->server_permissions, 'create', false),
                        'update' => Arr::get($package->server_permissions, 'update', false),
                        'delete' => Arr::get($package->server_permissions, 'delete', false),
                    ],
                    'sites' => [
                        'create' => Arr::get($package->site_permissions, 'create', false),
                        'update' => Arr::get($package->site_permissions, 'update', false),
                        'delete' => Arr::get($package->site_permissions, 'delete', false),
                    ]
                ] : [];

                return [
                    'user' => Auth::user() ? [
                        'id' => Auth::user()->id,
                        'name' => Auth::user()->name,
                        'email' => Auth::user()->email,
                        'role' => Auth::user()->role,
                        'user_name' => Auth::user()->user_name,
                        'avatar' => Auth::user()->getGravatar(),
                        'theme' => Auth::user()->theme,
                        'keyboard_shortcuts' => Auth::user()->keyboard_shortcuts,
                        'requires_password_for_ftp' => Auth::user()->requires_password_for_ftp,
                    ] : null,
                    'package' => auth()->user() && auth()->user()->package ? [
                        'name' => auth()->user()->package->name,
                        'maximum_sites' => auth()->user()->package->maximum_sites
                    ] : [
                        'name' => __('None')
                    ],
                    'can' => $can,
                    'integrations' => [
                        'cloudflare' => (bool)auth()->user() ? auth()->user()->providers()->where('type', UserProvider::TYPE_CLOUDFLARE)->count() : false,
                    ]
                ];
            },

            'settings' => function () {
                return [
                    'demo' => config('app.demo'),
                    'name' => setting('name', 'Company'),
                    'support' => setting('support', false),
                    'documentation' => setting('documentation', false),
                    'logo' => setting('logo'),
                    'allow_registration' => setting('allow_registration'),
                    'billing' => config('cashier.key') && config('cashier.secret')
                ];
            },
            'flash' => function () {
                return [
                    'success' => Session::get('success'),
                    'error' => Session::get('error'),
                    'info' => Session::get('info'),
                ];
            },
            'errors' => function () {
                return Session::get('errors')
                    ? Session::get('errors')->getBag('default')->getMessages()
                    : (object)[];
            },
            'errors_count' => function () {
                return Session::get('errors')
                    ? count(Session::get('errors')->getBag('default')->getMessages())
                    : 0;
            },
            'system_alert' => function () {
                $alert = Alert::query()
                    ->where(function ($query) {
                        return $query
                            ->whereNull('expires_at')
                            ->orWhere('expires_at', '>', now());
                    })
                    ->first(['message', 'expires_at', 'type']);

                if (!$alert) {
                    return null;
                }

                return [
                    'message' => $alert->message,
                    'type' => $alert->type
                ];
            }
        ]);
    }
}
