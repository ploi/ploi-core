<?php

namespace App\Filament\Resources\ServerResource\RelationManagers;

use Filament\Forms\Form;
use Filament\Tables\Table;
use App\Filament\Resources\SiteResource;
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

    public function form(Form $form): Form
    {
        return SiteResource::form($form);
    }

    public function table(Table $table): Table
    {
        return SiteResource::table($table);
    }
}
