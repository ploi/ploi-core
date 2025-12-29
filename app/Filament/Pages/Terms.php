<?php

namespace App\Filament\Pages;

use Filament\Forms\Components\Toggle;
use Filament\Forms\Components\MarkdownEditor;
use Filament\Actions\Action;
use Filament\Forms;
use Filament\Actions;
use Filament\Pages\Page;
use Filament\Schemas\Schema;
use Filament\Forms\Concerns\InteractsWithForms;
use Filament\Forms\Contracts\HasForms;
use Illuminate\Support\Str;
use Filament\Notifications\Notification;

class Terms extends Page implements HasForms
{
    use InteractsWithForms;
    protected static string | \BackedEnum | null $navigationIcon = 'heroicon-o-document-text';

    protected string $view = 'filament.pages.terms';

    protected static string | \UnitEnum | null $navigationGroup = 'Settings';

    protected static ?int $navigationSort = 3;

    public array $data = [];

    public function mount(): void
    {
        cache()->forget('core.settings');

        $this->form->fill([
            'accept_terms_required' => (bool)setting('accept_terms_required'),
            'terms' => setting('terms'),
            'privacy' => setting('privacy'),
        ]);
    }

    public function form(Schema $schema): Schema
    {
        return $schema
            ->statePath('data')
            ->components([
                Toggle::make('accept_terms_required')
                    ->label(__(' Require users to accept terms of service on registration'))
                    ->helperText(__('This will require newly registered users to accept the terms of service.')),
                MarkdownEditor::make('terms')
                    ->label(__('Content Terms Of Service')),
                MarkdownEditor::make('privacy')
                    ->label(__('Content Privacy Policy')),
            ]);
    }

    protected function getHeaderActions(): array
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
                        ->title(__('Loaded Terms Of Service Template'))
                        ->send();
                }),
        ];
    }

    public function save(): void
    {
        $state = $this->form->getState();

        setting($state);

        cache()->forget('core.settings');

        Notification::make()
            ->success()
            ->title(__('Terms saved.'))
            ->send();
    }
}
