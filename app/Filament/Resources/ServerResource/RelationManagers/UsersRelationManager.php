<?php

namespace App\Filament\Resources\ServerResource\RelationManagers;

use App\Filament\Resources\UserResource;
use Filament\Forms\Form;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Tables;
use Filament\Tables\Table;

class UsersRelationManager extends RelationManager
{
    protected static string $relationship = 'users';

    protected static ?string $recordTitleAttribute = 'name';

    public static function getLabel(): ?string
    {
        return __('User');
    }

    protected static function getPluralModelLabel(): string
    {
        return __('Users');
    }

    public function form(Form $form): Form
    {
        return UserResource::form($form);
    }

    public function table(Table $table): Table
    {
        return UserResource::table($table)
            ->headerActions([
                ...$table->getHeaderActions(),
                Tables\Actions\AttachAction::make()
                    ->preloadRecordSelect(),
            ])
            ->actions([
                ...$table->getActions(),
                Tables\Actions\DetachAction::make(),
            ]);
    }
}
