<?php

namespace App\Providers;

use Filament\Navigation\MenuItem;
use Exception;
use App\Models\Setting;
use Filament\Facades\Filament;
use Filament\Navigation\NavigationItem;
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

        Filament::serving(function () {
            Filament::registerUserMenuItems([
                MenuItem::make()
                    ->label('Back to panel')
                    ->url(route('dashboard'))
                    ->icon('heroicon-m-backward'),
            ]);

            Filament::registerNavigationItems([
                NavigationItem::make('Panel')
                    ->url(route('dashboard'))
                    ->icon('heroicon-o-backward')
                    ->group('External')
                    ->sort(3),
            ]);
        });
    }
}
