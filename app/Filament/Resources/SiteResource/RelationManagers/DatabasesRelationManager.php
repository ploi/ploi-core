<?php

namespace App\Filament\Resources\SiteResource\RelationManagers;

use Filament\Forms\Form;
use Filament\Tables\Table;
use App\Filament\Resources\DatabaseResource;
use Filament\Resources\RelationManagers\RelationManager;

class DatabasesRelationManager extends RelationManager
{
    protected static string $relationship = 'databases';

    protected static ?string $recordTitleAttribute = 'name';

    public function form(Form $form): Form
    {
        return DatabaseResource::form($form);
    }

    public function table(Table $table): Table
    {
        return DatabaseResource::table($table);
    }
}
