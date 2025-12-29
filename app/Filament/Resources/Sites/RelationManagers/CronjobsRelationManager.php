<?php

namespace App\Filament\Resources\Sites\RelationManagers;

use Filament\Schemas\Schema;
use Filament\Tables\Table;
use App\Filament\Resources\Cronjobs\CronjobResource;
use Filament\Resources\RelationManagers\RelationManager;

class CronjobsRelationManager extends RelationManager
{
    protected static string $relationship = 'cronjobs';

    protected static ?string $recordTitleAttribute = 'command';

    public function form(Schema $schema): Schema
    {
        return CronjobResource::form($schema);
    }

    public function table(Table $table): Table
    {
        return CronjobResource::table($table);
    }
}
