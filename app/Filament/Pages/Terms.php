<?php

namespace App\Filament\Pages;

use Filament\Forms\Components\MarkdownEditor;
use Filament\Forms\Components\Toggle;
use Filament\Notifications\Notification;
use Filament\Pages\Actions\Action;
use Filament\Pages\Page;
use Illuminate\Support\Str;

class Terms extends Page
{
    protected static ?string $navigationIcon = 'heroicon-o-document-text';

    protected static string $view = 'filament.pages.terms';

    protected static ?string $navigationGroup = 'Settings';

    protected static ?int $navigationSort = 3;

    public array $data = [];

    public function mount(): void
    {
        cache()->forget('core.settings');

        $this->form->fill([
            'accept_terms_required' => (bool) setting('accept_terms_required'),
            'terms' => setting('terms'),
            'privacy' => setting('privacy'),
        ]);
    }

    protected function getFormSchema(): array
    {
        return [
            Toggle::make('accept_terms_required')
                ->label(__(' Require users to accept terms of service on registration'))
                ->helperText(__('This will require newly registered users to accept the terms of service.')),
            MarkdownEditor::make('terms')
                ->label(__('Content Terms Of Service')),
            MarkdownEditor::make('privacy')
                ->label(__('Content Privacy Policy')),
        ];
    }

    protected function getActions(): array
    {
        return [
            Action::make('load_terms_template')
                ->label(__('Load Terms Of Service Template'))
                ->action(function (self $livewire) {
                    $template = Str::of(file_get_contents(storage_path('templates/terms-of-service.md')))
                        ->replace([
                            '{NAME}',
                            '{WEBSITE}',
                            '{DATE}',
                        ], [
                            setting('name'),
                            config('app.url'),
                            date('Y-m-d'),
                        ])
                        ->value();

                    $livewire->data['terms'] = $template;

                    Notification::make()
                        ->success()
                        ->body(__('Loaded Terms Of Service Template'))
                        ->send();
                }),
        ];
    }

    protected function getFormStatePath(): ?string
    {
        return 'data';
    }

    public function save(): void
    {
        $state = $this->form->getState();

        foreach ($state as $key => $value) {
            setting([$key => $value]);
        }

        cache()->forget('core.settings');

        Notification::make()
            ->success()
            ->body(__('Terms saved.'))
            ->send();
    }
}
