<?php

namespace App\Filament\Resources\Sites\RelationManagers;

use Filament\Schemas\Schema;
use Filament\Tables\Table;
use App\Filament\Resources\Redirects\RedirectResource;
use Filament\Resources\RelationManagers\RelationManager;

class RedirectsRelationManager extends RelationManager
{
    protected static string $relationship = 'redirects';

    protected static ?string $recordTitleAttribute = 'from';

    public function form(Schema $schema): Schema
    {
        return RedirectResource::form($schema);
    }

    public function table(Table $table): Table
    {
        return RedirectResource::table($table);
    }
}
