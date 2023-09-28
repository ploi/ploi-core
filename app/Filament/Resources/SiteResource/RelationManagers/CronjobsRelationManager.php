<?php

namespace App\Filament\Resources\SiteResource\RelationManagers;

use Filament\Forms\Form;
use Filament\Tables\Table;
use App\Filament\Resources\CronjobResource;
use Filament\Resources\RelationManagers\RelationManager;

class CronjobsRelationManager extends RelationManager
{
    protected static string $relationship = 'cronjobs';

    protected static ?string $recordTitleAttribute = 'command';

    public function form(Form $form): Form
    {
        return CronjobResource::form($form);
    }

    public function table(Table $table): Table
    {
        return CronjobResource::table($table);
    }
}
