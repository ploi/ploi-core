<?php

namespace App\Filament\Resources\Servers\RelationManagers;

use Filament\Schemas\Schema;
use Filament\Actions\AttachAction;
use Filament\Actions\DetachAction;
use Filament\Tables;
use Filament\Tables\Table;
use App\Filament\Resources\Users\UserResource;
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

    public function form(Schema $schema): Schema
    {
        return UserResource::form($schema);
    }

    public function table(Table $table): Table
    {
        return UserResource::table($table)
            ->headerActions([
                ...$table->getHeaderActions(),
                AttachAction::make()
                    ->preloadRecordSelect(),
            ])
            ->recordActions([
                ...$table->getActions(),
                DetachAction::make(),
            ]);
    }
}
