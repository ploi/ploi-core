<?php

namespace App\Filament\Resources\SiteResource\RelationManagers;

use Filament\Forms\Form;
use Filament\Tables\Table;
use App\Filament\Resources\RedirectResource;
use Filament\Resources\RelationManagers\RelationManager;

class RedirectsRelationManager extends RelationManager
{
    protected static string $relationship = 'redirects';

    protected static ?string $recordTitleAttribute = 'from';

    public function form(Form $form): Form
    {
        return RedirectResource::form($form);
    }

    public function table(Table $table): Table
    {
        return RedirectResource::table($table);
    }
}
