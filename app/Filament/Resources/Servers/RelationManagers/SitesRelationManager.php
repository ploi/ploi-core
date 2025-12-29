<?php

namespace App\Filament\Resources\Servers\RelationManagers;

use Filament\Schemas\Schema;
use Filament\Tables\Table;
use App\Filament\Resources\Sites\SiteResource;
use Filament\Resources\RelationManagers\RelationManager;

class SitesRelationManager extends RelationManager
{
    protected static string $relationship = 'sites';

    protected static ?string $recordTitleAttribute = 'domain';

    public static function getLabel(): ?string
    {
        return __('Site');
    }

    protected static function getPluralModelLabel(): string
    {
        return __('Sites');
    }

    public function form(Schema $schema): Schema
    {
        return SiteResource::form($schema);
    }

    public function table(Table $table): Table
    {
        return SiteResource::table($table);
    }
}
