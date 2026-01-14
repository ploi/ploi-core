<?php

namespace App\Filament\Resources\Sites\RelationManagers;

use Filament\Schemas\Schema;
use Filament\Tables\Table;
use App\Filament\Resources\Certificates\CertificateResource;
use Filament\Resources\RelationManagers\RelationManager;

class CertificatesRelationManager extends RelationManager
{
    protected static string $relationship = 'certificates';

    protected static ?string $recordTitleAttribute = 'domain';

    public function form(Schema $schema): Schema
    {
        return CertificateResource::form($schema);
    }

    public function table(Table $table): Table
    {
        return CertificateResource::table($table);
    }
}
