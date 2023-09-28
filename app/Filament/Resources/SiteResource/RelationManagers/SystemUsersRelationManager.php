<?php

namespace App\Filament\Resources\SiteResource\RelationManagers;

use Filament\Forms\Form;
use Filament\Tables\Table;
use App\Filament\Resources\SiteSystemUserResource;
use Filament\Resources\RelationManagers\RelationManager;

class SystemUsersRelationManager extends RelationManager
{
    protected static string $relationship = 'systemUsers';

    protected static ?string $recordTitleAttribute = 'user_name';

    public function form(Form $form): Form
    {
        return SiteSystemUserResource::form($form);
    }

    public function table(Table $table): Table
    {
        return SiteSystemUserResource::table($table);
    }
}
