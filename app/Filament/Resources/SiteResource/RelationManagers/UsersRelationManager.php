<?php

namespace App\Filament\Resources\SiteResource\RelationManagers;

use App\Filament\Resources\UserResource;
use Filament\Resources\Form;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Resources\Table;
use Filament\Tables\Actions\AttachAction;
use Filament\Tables\Actions\DetachAction;

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
            ->headerActions([
                AttachAction::make()
                    ->preloadRecordSelect(),
            ])
            ->appendActions([
                DetachAction::make(),
            ]);
    }
}
