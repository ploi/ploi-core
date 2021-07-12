<?php

namespace App\Providers;

use App\Models\Setting;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->singleton('settings', function ($app) {
            return $app['cache']->remember('core.settings', now()->addDay(), function () {
                try {
                    return Setting::pluck('value', 'key')->toArray();
                } catch (\Exception $exception) {
                    return [];
                }
            });
        });
    }
}
