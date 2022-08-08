<?php

namespace App\Filament\Resources\SiteResource\RelationManagers;

use App\Filament\Resources\DatabaseResource;
use Filament\Resources\Form;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Resources\Table;

class DatabasesRelationManager extends RelationManager
{
    protected static string $relationship = 'databases';

    protected static ?string $recordTitleAttribute = 'name';

    public static function form(Form $form): Form
    {
        return DatabaseResource::form($form);
    }

    public static function table(Table $table): Table
    {
        return DatabaseResource::table($table);
    }
}
