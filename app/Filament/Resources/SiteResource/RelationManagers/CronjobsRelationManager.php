<?php

namespace App\Filament\Resources\SiteResource\RelationManagers;

use App\Filament\Resources\CronjobResource;
use Filament\Resources\Form;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Resources\Table;

class CronjobsRelationManager extends RelationManager
{
    protected static string $relationship = 'cronjobs';

    protected static ?string $recordTitleAttribute = 'command';

    public static function form(Form $form): Form
    {
        return CronjobResource::form($form);
    }

    public static function table(Table $table): Table
    {
        return CronjobResource::table($table);
    }
}
