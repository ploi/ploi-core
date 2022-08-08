<?php

namespace App\Filament\Resources\SiteResource\RelationManagers;

use App\Filament\Resources\SiteSystemUserResource;
use Filament\Resources\Form;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Resources\Table;

class SystemUsersRelationManager extends RelationManager
{
    protected static string $relationship = 'systemUsers';

    protected static ?string $recordTitleAttribute = 'user_name';

    public static function form(Form $form): Form
    {
        return SiteSystemUserResource::form($form);
    }

    public static function table(Table $table): Table
    {
        return SiteSystemUserResource::table($table);
    }
}
