<?php

namespace App\Filament\Resources\ServerResource\RelationManagers;

use App\Filament\Resources\SiteResource;
use Filament\Forms;
use Filament\Resources\Form;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Resources\Table;
use Filament\Tables;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

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

    public static function form(Form $form): Form
    {
        return SiteResource::form($form);
    }

    public static function table(Table $table): Table
    {
        return SiteResource::table($table);
    }
}
