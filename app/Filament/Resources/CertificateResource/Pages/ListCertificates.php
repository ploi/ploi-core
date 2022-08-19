<?php

namespace App\Filament\Resources\CertificateResource\Pages;

use Filament\Pages\Actions;
use Filament\Resources\Pages\ListRecords;
use App\Filament\Resources\CertificateResource;

class ListCertificates extends ListRecords
{
    protected static string $resource = CertificateResource::class;

    protected function getActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
