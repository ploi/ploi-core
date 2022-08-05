<?php

namespace App\Filament\Resources\UserResource\RelationManagers;

use App\Filament\Resources\SiteResource;
use Filament\Resources\Form;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Resources\Table;

class SitesRelationManager extends RelationManager
{
    protected static string $relationship = 'sites';

    protected static ?string $recordTitleAttribute = 'domain';

    public static function form(Form $form): Form
    {
        return SiteResource::form($form);
    }

    public static function table(Table $table): Table
    {
        return SiteResource::table($table);
    }
}
