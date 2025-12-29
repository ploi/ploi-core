<?php

namespace App\Filament\Resources\Sites\RelationManagers;

use Filament\Schemas\Schema;
use Filament\Tables\Table;
use App\Filament\Resources\Databases\DatabaseResource;
use Filament\Resources\RelationManagers\RelationManager;

class DatabasesRelationManager extends RelationManager
{
    protected static string $relationship = 'databases';

    protected static ?string $recordTitleAttribute = 'name';

    public function form(Schema $schema): Schema
    {
        return DatabaseResource::form($schema);
    }

    public function table(Table $table): Table
    {
        return DatabaseResource::table($table);
    }
}
