<?php

namespace App\Filament\Resources\UserResource\Pages;

use Filament\Pages\Actions;
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
            Actions\DeleteAction::make(),
        ];
    }
}
