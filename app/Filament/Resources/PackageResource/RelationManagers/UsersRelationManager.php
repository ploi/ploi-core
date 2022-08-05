<?php

namespace App\Filament\Resources\PackageResource\RelationManagers;

use App\Filament\Resources\UserResource;
use App\Models\User;
use Filament\Forms\Components\Select;
use Filament\Resources\Form;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Resources\Table;
use Filament\Tables\Actions\Action;

class UsersRelationManager extends RelationManager
{
    protected static string $relationship = 'users';

    protected static ?string $recordTitleAttribute = 'name';

    public static function form(Form $form): Form
    {
        return UserResource::form($form);
    }

    public static function table(Table $table): Table
    {
        return UserResource::table($table)
            ->appendHeaderActions([
                Action::make('add_user')
                    ->label(__('Add user'))
                    ->form(fn (self $livewire) => [
                        Select::make('user_id')
                            ->options(User::orderBy('name')->get()->mapWithKeys(fn (User $user) => [$user->id => $user->name]))
                            ->required(),
                    ])
                    ->action(function (array $data, self $livewire) {
                        $user = User::find($data['user_id']);

                        $user->update([
                            'package_id' => $livewire->ownerRecord->id,
                        ]);
                    })
                    ->button(),
            ]);
    }
}
