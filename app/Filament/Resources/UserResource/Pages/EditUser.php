<?php

namespace App\Filament\Resources\UserResource\Pages;

use Filament\Pages\Actions;
use Filament\Forms\Components\Toggle;
use App\Actions\User\DeleteUserAction;
use App\Filament\Resources\UserResource;
use Filament\Notifications\Notification;
use Filament\Resources\Pages\EditRecord;

class EditUser extends EditRecord
{
    protected static string $resource = UserResource::class;

    protected function getActions(): array
    {
        return [
            Actions\Action::make('two_factor_authentication')
                ->label(__('Disable two-factor authentication'))
                ->color('secondary')
                ->action(function () {
                    $this->record->disableTwoFactorAuth();

                    Notification::make()
                        ->body(__('Two-factor authentication disabled'))
                        ->success()
                        ->send();
                })
                ->visible(fn () => $this->record->hasTwoFactorEnabled())
                ->requiresConfirmation(),
            Actions\Action::make('delete')
                ->form([
                    Toggle::make('remove_all_data')
                        ->label(__('Delete all servers, sites, databases, etc.'))
                        ->default(true)
                        ->helperText(__('This will delete all the servers, sites, databases, etc. associated with this user. Servers & sites that belong to multiple users will not be deleted. This action cannot be undone.')),
                ])
                ->requiresConfirmation()
                ->action(function (array $data) {
                    app(DeleteUserAction::class)->execute($this->getRecord(), $data['remove_all_data']);

                    Notification::make()
                        ->body(__('User deleted'))
                        ->success()
                        ->send();

                    $this->redirectRoute('filament.resources.users.index');
                })
                ->color('danger'),
        ];
    }
}
