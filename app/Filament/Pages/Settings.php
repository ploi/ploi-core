<?php

namespace App\Filament\Pages;

use App\Models\Package;
use Filament\Forms\Components\Actions\Action;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Grid;
use Filament\Forms\Components\Select;
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
            'trial' => (bool) setting('trial'),
            'support' => (bool) setting('support'),
            'documentation' => (bool) setting('documentation'),
            'allow_registration' => (bool) setting('allow_registration'),
            'receive_email_on_server_creation' => (bool) setting('receive_email_on_server_creation'),
            'receive_email_on_site_creation' => (bool) setting('receive_email_on_site_creation'),
            'enable_api' => (bool) setting('enable_api'),
            'api_token' => setting('api_token'),
            'isolate_per_site_per_user' => (bool) setting('isolate_per_site_per_user'),
        ]);
    }

    public function getFormSchema(): array
    {
        return [
            Grid::make(2)
                ->schema([
                    FileUpload::make('logo')
                        ->label(__('Logo'))
                        ->disk('logos'),
                    Grid::make(1)
                        ->schema([
                            TextInput::make('name')
                                ->label(__('Company name'))
                                ->required(),
                            TextInput::make('email')
                                ->label(__('E-mail address'))
                                ->email(),
                            TextInput::make('support_emails')
                                ->label(__('Support email address'))
                                ->helperText('Separate by comma to allow more email addresses'),
                        ])
                        ->columnSpan(1),
                    Select::make('default_package')
                        ->options(fn () => Package::orderBy('name')->get()->mapWithKeys(fn (Package $package) => [$package->id => $package->name]))
                        ->label(__('Select default package'))
                        ->helperText(__('Select the default package a user should get when you create or they register')),
                    Select::make('default_language')
                        ->options(collect(languages())->mapWithKeys(fn (string $language) => [$language => $language]))
                        ->label('Select default language')
                        ->helperText('Select the default language a user should get when you create or they register'),
                    Select::make('rotate_logs_after')
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
                        ->columnSpan(2),
                    Toggle::make('trial')
                        ->label(__('Enable trial'))
                        ->helperText(__('This will allow you to have users with trials.')),
                    Toggle::make('allow_registration')
                        ->label(__('Allow registration'))
                        ->helperText(__('This will allow your customers to make support requests to you.')),
                    Toggle::make('support')
                        ->label(__('Enable support platform'))
                        ->helperText(__('This will allow your customers to make support requests to you.')),
                    Toggle::make('documentation')
                        ->label(__('Enable documentation platform'))
                        ->helperText(__('This will allow you to create articles for your users to look at.')),
                    Toggle::make('receive_email_on_server_creation')
                        ->label(__('Receive email when customers create server'))
                        ->helperText(__('This will send an email to all admins notifying them about a new server installation.')),
                    Toggle::make('receive_email_on_site_creation')
                        ->label(__('Receive email when customers create site'))
                        ->helperText(__('This will send an email to all admins notifying them about a new site installation.')),
                    Toggle::make('enable_api')
                        ->label(__('Enable API'))
                        ->helperText(new HtmlString(__('This will allow you to interact with your system via the API. ') . '<a href="https://docs.ploi-core.io/core-api/introduction" target="_blank" class="text-primary-600">' . __('More information') . '</a>')),
                    TextInput::make('api_token')
                        ->label(__('API token'))
                        ->afterStateHydrated(function (?string $state, TextInput $component) {
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
                    Toggle::make('isolate_per_site_per_user')
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

        if ( $state['logo'] === null && $oldLogo ) {
            Storage::disk('logos')->delete($oldLogo);
        }

        foreach ($state as $key => $value) {
            setting([$key => $value]);
        }

        cache()->forget('core.settings');

        Notification::make()
            ->success()
            ->body(__('Settings saved.'))
            ->send();

        if ( $state['logo'] !== $oldLogo ) {
            $this->redirectRoute('filament.pages.settings');
        }
    }
}
