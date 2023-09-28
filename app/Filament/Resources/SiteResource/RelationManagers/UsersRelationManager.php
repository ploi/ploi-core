<?php

namespace App\Filament\Resources\SiteResource\RelationManagers;

use Filament\Tables;
use Filament\Forms\Form;
use Filament\Tables\Table;
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
