<?php

namespace App\Providers;

use App\Rules\Hostname;
use Filament\Facades\Filament;
use Illuminate\Foundation\Vite;
use Filament\PluginServiceProvider;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;

class FilamentServiceProvider extends PluginServiceProvider
{
    public static string $name = 'ploi-core::admin';

    public function boot(): void
    {
        Filament::serving(function () {
            Filament::registerTheme(
                app(Vite::class)('resources/css/filament.css', 'build/filament'),
            );

            Filament::registerNavigationGroups([
                'Server management',
                'Site management',
                'Providers',
                'Documentation',
                'Support',
                'Settings',
            ]);

            TextInput::macro('hostname', function () {
                return $this->rule(new Hostname());
            });

            TextInput::configureUsing(function (TextInput $textInput) {
                return $textInput->maxLength(255);
            });

            Textarea::configureUsing(function (Textarea $textarea) {
                return $textarea->maxLength(65535);
            });
        });

        parent::boot();
    }
}
