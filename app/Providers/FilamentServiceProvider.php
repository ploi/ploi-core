<?php

namespace App\Providers;

use App\Rules\Hostname;
use Filament\Facades\Filament;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\PluginServiceProvider;

class FilamentServiceProvider extends PluginServiceProvider
{
    public static string $name = 'ploi-core::admin';

    protected array $widgets = [
        //
    ];

    protected array $pages = [
        //
    ];

    protected array $resources = [
        //
    ];

    public function boot(): void
    {
        Filament::serving(function () {
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
