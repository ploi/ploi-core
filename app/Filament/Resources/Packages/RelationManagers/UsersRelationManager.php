<?php

namespace App\Filament\Resources\Packages\RelationManagers;

use Filament\Schemas\Schema;
use Filament\Actions\Action;
use App\Models\User;
use Filament\Tables\Table;
use Filament\Forms\Components\Select;
use App\Filament\Resources\Users\UserResource;
use Filament\Resources\RelationManagers\RelationManager;

class UsersRelationManager extends RelationManager
{
    protected static string $relationship = 'users';

    protected static ?string $recordTitleAttribute = 'name';

    public function form(Schema $schema): Schema
    {
        return UserResource::form($schema);
    }

    public function table(Table $table): Table
    {
        return UserResource::table($table)
            ->headerActions([
                ...$table->getHeaderActions(),
                Action::make('add_user')
                    ->label(__('Add user'))
                    ->schema(fn (self $livewire) => [
                        Select::make('user_id')
                            ->label('User')
                            ->options(User::orderBy('name')->get()->mapWithKeys(fn (User $user) => [$user->id => $user->name]))
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
