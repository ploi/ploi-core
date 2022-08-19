<?php

namespace App\Filament\Resources\DatabaseResource\Pages;

use App\Models\Database;
use App\Services\Ploi\Ploi;
use Filament\Resources\Pages\Page;
use App\Mail\Database\PasswordReset;
use Illuminate\Support\Facades\Mail;
use Filament\Forms\Components\Toggle;
use Filament\Notifications\Notification;
use App\Filament\Resources\DatabaseResource;

class EditDatabase extends Page
{
    protected $listeners = [
        '$refresh',
    ];

    protected static string $resource = DatabaseResource::class;

    protected static string $view = 'filament.resources.database-resource.pages.edit-database';

    public Database $record;

    protected ?string $recentlyUpdatedPassword = null;

    public function mount(): void
    {
        $this->resetDatabasePasswordForm->fill();
    }

    public function getForms(): array
    {
        return [
            'resetDatabasePasswordForm' => $this->makeForm()
                ->schema([
                    Toggle::make('send_new_password_to_user')
                        ->label(__('Email new password to user')),
                ])
                ->model($this->record),
        ];
    }

    public function resetDatabasePassword(): void
    {
        $state = $this->resetDatabasePasswordForm->getState();

        $data = Ploi::make()
            ->server($this->record->server->ploi_id)
            ->databases($this->record->ploi_id)
            ->users($this->record->users->first()->ploi_id)
            ->resetPassword()
            ->getData();

        $this->recentlyUpdatedPassword = $data->new_password;

        Notification::make()
            ->body(__('Successfully reset database password.'))
            ->success()
            ->send();

        if ($state['send_new_password_to_user']) {
            Mail::to($this->record->site->users)->send(new PasswordReset($this->record, $this->recentlyUpdatedPassword));
        }
    }
}
