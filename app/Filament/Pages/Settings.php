<?php

namespace App\Filament\Pages;

use App\Models\Package;
use App\Models\Server;
use Filament\Forms;
use Filament\Forms\Components\Actions\Action;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Notifications\Notification;
use Filament\Pages\Page;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\HtmlString;
use Illuminate\Support\Str;

class Settings extends Page
{
    protected static ?string $navigationIcon = 'heroicon-o-cog';

    protected static string $view = 'filament.pages.settings';

    protected static ?string $navigationGroup = 'Settings';

    protected static ?int $navigationSort = 1;

    public array $data = [];

    public function mount(): void
    {
        cache()->forget('core.settings');

        $this->form->fill([
            'logo' => setting('logo'),
            'name' => setting('name'),
            'email' => setting('email'),
            'support_emails' => setting('support_emails'),
            'default_package' => setting('default_package'),
            'default_language' => setting('default_language'),
            'rotate_logs_after' => setting('rotate_logs_after'),
            'trial' => (bool)setting('trial'),
            'support' => (bool)setting('support'),
            'documentation' => (bool)setting('documentation'),
            'allow_registration' => (bool)setting('allow_registration'),
            'receive_email_on_server_creation' => (bool)setting('receive_email_on_server_creation'),
            'receive_email_on_site_creation' => (bool)setting('receive_email_on_site_creation'),
            'enable_api' => (bool)setting('enable_api'),
            'api_token' => setting('api_token'),
            'isolate_per_site_per_user' => (bool)setting('isolate_per_site_per_user'),
            'default_os' => setting('default_os', Server::OS_UBUNTU_22),
        ]);
    }

    public function getFormSchema(): array
    {
        return [
            Forms\Components\Grid::make(2)
                ->schema([
                    Forms\Components\Grid::make(1)
                        ->schema([
                            Forms\Components\TextInput::make('name')
                                ->label(__('Company name'))
                                ->required(),
                            Forms\Components\TextInput::make('email')
                                ->label(__('E-mail address'))
                                ->email(),
                            Forms\Components\TextInput::make('support_emails')
                                ->label(__('Support email address'))
                                ->helperText('Separate by comma to allow more email addresses'),
                        ])
                        ->columnSpan(2),
                    Forms\Components\Select::make('default_package')
                        ->options(fn() => Package::orderBy('name')->pluck('name', 'id'))
                        ->label(__('Select default package'))
                        ->helperText(__('Select the default package a user should get when you create or they register')),
                    Forms\Components\Select::make('default_language')
                        ->options(collect(languages())->mapWithKeys(fn(string $language) => [$language => $language]))
                        ->label('Select default language')
                        ->helperText('Select the default language a user should get when you create or they register'),
                    Forms\Components\FileUpload::make('logo')
                        ->label(__('Logo'))
                        ->disk('logos')
                        ->columnSpan(2),
                    Forms\Components\Select::make('rotate_logs_after')
                        ->label(__('This will rotate any logs older than selected, this helps cleanup your database'))
                        ->options([
                            null => __("Don't rotate logs"),
                            'weeks-1' => __('Older than 1 week'),
                            'months-1' => __('Older than 1 month'),
                            'months-3' => __('Older than 3 months'),
                            'months-6' => __('Older than 6 months'),
                            'years-1' => __('Older than 1 year'),
                            'years-2' => __('Older than 2 years'),
                            'years-3' => __('Older than 3 years'),
                            'years-4' => __('Older than 4 years'),
                        ])
                        ->columnSpan(1),
                    Forms\Components\Select::make('default_os')
                        ->label(__('Select the default OS that should be used when users create a server'))
                        ->default(Server::OS_UBUNTU_22)
                        ->options([
                            Server::OS_UBUNTU_18 => __('Ubuntu 18'),
                            Server::OS_UBUNTU_20 => __('Ubuntu 20'),
                            Server::OS_UBUNTU_22 => __('Ubuntu 22'),
                        ])
                        ->columnSpan(1),
                    Forms\Components\Toggle::make('trial')
                        ->label(__('Enable trial'))
                        ->helperText(__('This will allow you to have users with trials.')),
                    Forms\Components\Toggle::make('allow_registration')
                        ->label(__('Allow registration'))
                        ->helperText(__('Allow customer registration')),
                    Forms\Components\Toggle::make('support')
                        ->label(__('Enable support platform'))
                        ->helperText(__('This will allow your customers to make support requests to you.')),
                    Forms\Components\Toggle::make('documentation')
                        ->label(__('Enable documentation platform'))
                        ->helperText(__('This will allow you to create articles for your users to look at.')),
                    Forms\Components\Toggle::make('receive_email_on_server_creation')
                        ->label(__('Receive email when customers create server'))
                        ->helperText(__('This will send an email to all admins notifying them about a new server installation.')),
                    Forms\Components\Toggle::make('receive_email_on_site_creation')
                        ->label(__('Receive email when customers create site'))
                        ->helperText(__('This will send an email to all admins notifying them about a new site installation.')),
                    Forms\Components\Toggle::make('enable_api')
                        ->label(__('Enable API'))
                        ->helperText(new HtmlString(__('This will allow you to interact with your system via the API. ') . '<a href="https://docs.ploi-core.io/304-core-api/737-introduction" target="_blank" class="text-primary-600">' . __('More information') . '</a>')),
                    Forms\Components\TextInput::make('api_token')
                        ->label(__('API token'))
                        ->afterStateHydrated(function (?string $state, Forms\Components\TextInput $component) {
                            $state = filled($state) ? decrypt($state) : null;

                            $component->state($state);
                        })
                        ->dehydrateStateUsing(function (?string $state) {
                            return filled($state) ? encrypt($state) : null;
                        })
                        ->registerActions([
                            'generate' => $generateAction = Action::make('generate')
                                ->label(__('Generate'))
                                ->icon('heroicon-o-key')
                                ->action(function (TextInput $component) {
                                    $component->state(Str::random(20));
                                })
                                ->tooltip('Generate'),
                        ])
                        ->suffixAction($generateAction),
                    Forms\Components\Toggle::make('isolate_per_site_per_user')
                        ->label(__('Enable site isolation per site & user'))
                        ->helperText(__('This will make sure each site created by one user is always isolated from another.')),
                ]),
        ];
    }

    public function getFormStatePath(): ?string
    {
        return 'data';
    }

    public function save(): void
    {
        $state = $this->form->getState();

        $oldLogo = setting('logo');
        $oldDocumentation = setting('documentation');
        $oldSupport = setting('support');

        if ($state['logo'] === null && $oldLogo) {
            Storage::disk('logos')->delete($oldLogo);
        }

        setting($state);

        cache()->forget('core.settings');

        Notification::make()
            ->success()
            ->title(__('Settings saved.'))
            ->send();

        if ($state['logo'] !== $oldLogo || $state['documentation'] !== $oldDocumentation || $state['support'] !== $oldSupport) {
            $this->redirect(Settings::getUrl());
        }
    }
}
