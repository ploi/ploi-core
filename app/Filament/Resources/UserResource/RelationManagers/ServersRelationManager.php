<?php

namespace App\Filament\Resources\UserResource\RelationManagers;

use Filament\Forms\Form;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use App\Filament\Resources\ServerResource;
use Illuminate\Database\Eloquent\Relations\Relation;
use Filament\Resources\RelationManagers\RelationManager;

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

    protected function getTableQuery(): Builder|Relation
    {
        return parent::getTableQuery()
            ->withCount('sites');
    }
}
