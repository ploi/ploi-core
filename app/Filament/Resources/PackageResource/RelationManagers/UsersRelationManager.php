<?php

namespace App\Filament\Resources\PackageResource\RelationManagers;

use App\Models\User;
use Filament\Forms\Form;
use Filament\Tables\Table;
use Filament\Tables\Actions\Action;
use Filament\Forms\Components\Select;
use App\Filament\Resources\UserResource;
use Filament\Resources\RelationManagers\RelationManager;

class UsersRelationManager extends RelationManager
{
    protected static string $relationship = 'users';

    protected static ?string $recordTitleAttribute = 'name';

    public function form(Form $form): Form
    {
        return UserResource::form($form);
    }

    public function table(Table $table): Table
    {
        return UserResource::table($table)
            ->headerActions([
                ...$table->getHeaderActions(),
                Action::make('add_user')
                    ->label(__('Add user'))
                    ->form(fn(self $livewire) => [
                        Select::make('user_id')
                            ->label('User')
                            ->options(User::orderBy('name')->get()->mapWithKeys(fn(User $user) => [$user->id => $user->name]))
                            ->preload()
                            ->searchable()
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
