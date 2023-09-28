<?php

namespace App\Filament\Resources\UserResource\RelationManagers;

use App\Filament\Resources\ServerResource;
use Filament\Forms\Form;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Tables\Table;

class ServersRelationManager extends RelationManager
{
    protected static string $relationship = 'servers';

    protected static ?string $recordTitleAttribute = 'name';

    public function form(Form $form): Form
    {
        return ServerResource::form($form);
    }

    public function table(Table $table): Table
    {
        return ServerResource::table($table);
    }
}
