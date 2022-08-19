<?php

namespace App\Filament\Resources\ServerResource\RelationManagers;

use Filament\Tables;
use Filament\Resources\Form;
use Filament\Resources\Table;
use App\Filament\Resources\UserResource;
use Filament\Resources\RelationManagers\RelationManager;

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

    public static function form(Form $form): Form
    {
        return UserResource::form($form);
    }

    public static function table(Table $table): Table
    {
        return UserResource::table($table)
            ->appendHeaderActions([
                Tables\Actions\AttachAction::make()->preloadRecordSelect(),
            ])
            ->appendActions([
                Tables\Actions\DetachAction::make(),
            ]);
    }
}
