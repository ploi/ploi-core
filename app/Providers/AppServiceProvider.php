<?php

namespace App\Providers;

use Exception;
use App\Models\Setting;
use Illuminate\Support\ServiceProvider;
use Illuminate\Validation\Rules\Password;

class AppServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->singleton('settings', function ($app) {
            return $app['cache']->remember('core.settings', now()->addDay(), function () {
                try {
                    return Setting::pluck('value', 'key')->toArray();
                } catch (Exception $exception) {
                    return [];
                }
            });
        });
    }

    public function boot()
    {
        Password::defaults(function () {
            $rule = Password::min(6);

            return $this->app->isProduction()
                ? $rule->letters()->numbers()->uncompromised()
                : $rule;
        });
    }
}
