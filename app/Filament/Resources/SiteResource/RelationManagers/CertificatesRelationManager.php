<?php

namespace App\Filament\Resources\SiteResource\RelationManagers;

use Filament\Forms\Form;
use Filament\Tables\Table;
use App\Filament\Resources\CertificateResource;
use Filament\Resources\RelationManagers\RelationManager;

class CertificatesRelationManager extends RelationManager
{
    protected static string $relationship = 'certificates';

    protected static ?string $recordTitleAttribute = 'domain';

    public function form(Form $form): Form
    {
        return CertificateResource::form($form);
    }

    public function table(Table $table): Table
    {
        return CertificateResource::table($table);
    }
}
