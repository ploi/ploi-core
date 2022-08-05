<?php

namespace App\Filament\Resources\UserResource\RelationManagers;

use App\Filament\Resources\ServerResource;
use Filament\Resources\Form;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Resources\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Relations\Relation;

class ServersRelationManager extends RelationManager
{
    protected static string $relationship = 'servers';

    protected static ?string $recordTitleAttribute = 'name';

    public static function form(Form $form): Form
    {
        return ServerResource::form($form);
    }

    public static function table(Table $table): Table
    {
        return ServerResource::table($table);
    }

    protected function getTableQuery(): Builder|Relation
    {
        return parent::getTableQuery()
            ->withCount('sites');
    }
}
