<?php

namespace App\Filament\Resources\SiteResource\RelationManagers;

use App\Filament\Resources\CertificateResource;
use Filament\Resources\Form;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Resources\Table;

class CertificatesRelationManager extends RelationManager
{
    protected static string $relationship = 'certificates';

    protected static ?string $recordTitleAttribute = 'domain';

    public static function form(Form $form): Form
    {
        return CertificateResource::form($form);
    }

    public static function table(Table $table): Table
    {
        return CertificateResource::table($table);
    }
}
