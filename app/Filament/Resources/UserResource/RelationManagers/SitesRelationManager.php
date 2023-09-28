<?php

namespace App\Filament\Resources\UserResource\RelationManagers;

use Filament\Forms\Form;
use Filament\Tables\Table;
use App\Filament\Resources\SiteResource;
use Filament\Resources\RelationManagers\RelationManager;

class SitesRelationManager extends RelationManager
{
    protected static string $relationship = 'sites';

    protected static ?string $recordTitleAttribute = 'domain';

    public function form(Form $form): Form
    {
        return SiteResource::form($form);
    }

    public function table(Table $table): Table
    {
        return SiteResource::table($table);
    }
}
