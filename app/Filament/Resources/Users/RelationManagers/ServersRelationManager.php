<?php

namespace App\Filament\Resources\Users\RelationManagers;

use Filament\Schemas\Schema;
use Filament\Tables\Table;
use App\Filament\Resources\Servers\ServerResource;
use Filament\Resources\RelationManagers\RelationManager;

class ServersRelationManager extends RelationManager
{
    protected static string $relationship = 'servers';

    protected static ?string $recordTitleAttribute = 'name';

    public function form(Schema $schema): Schema
    {
        return ServerResource::form($schema);
    }

    public function table(Table $table): Table
    {
        return ServerResource::table($table);
    }
}
