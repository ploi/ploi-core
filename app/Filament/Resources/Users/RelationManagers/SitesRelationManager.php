<?php

namespace App\Filament\Resources\Users\RelationManagers;

use Filament\Schemas\Schema;
use Filament\Tables\Table;
use App\Filament\Resources\Sites\SiteResource;
use Filament\Resources\RelationManagers\RelationManager;

class SitesRelationManager extends RelationManager
{
    protected static string $relationship = 'sites';

    protected static ?string $recordTitleAttribute = 'domain';

    public function form(Schema $schema): Schema
    {
        return SiteResource::form($schema);
    }

    public function table(Table $table): Table
    {
        return SiteResource::table($table);
    }
}
