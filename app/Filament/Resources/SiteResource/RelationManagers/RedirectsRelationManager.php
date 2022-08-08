<?php

namespace App\Filament\Resources\SiteResource\RelationManagers;

use App\Filament\Resources\RedirectResource;
use Filament\Resources\Form;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Resources\Table;

class RedirectsRelationManager extends RelationManager
{
    protected static string $relationship = 'redirects';

    protected static ?string $recordTitleAttribute = 'from';

    public static function form(Form $form): Form
    {
        return RedirectResource::form($form);
    }

    public static function table(Table $table): Table
    {
        return RedirectResource::table($table);
    }
}
