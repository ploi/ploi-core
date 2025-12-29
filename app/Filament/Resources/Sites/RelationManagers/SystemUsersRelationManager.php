<?php

namespace App\Filament\Resources\Sites\RelationManagers;

use Filament\Schemas\Schema;
use Filament\Tables\Table;
use App\Filament\Resources\SiteSystemUsers\SiteSystemUserResource;
use Filament\Resources\RelationManagers\RelationManager;

class SystemUsersRelationManager extends RelationManager
{
    protected static string $relationship = 'systemUsers';

    protected static ?string $recordTitleAttribute = 'user_name';

    public function form(Schema $schema): Schema
    {
        return SiteSystemUserResource::form($schema);
    }

    public function table(Table $table): Table
    {
        return SiteSystemUserResource::table($table);
    }
}
