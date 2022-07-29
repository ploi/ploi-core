<?php

namespace App\Filament\Resources\CertificateResource\Pages;

use App\Filament\Resources\CertificateResource;
use Filament\Pages\Actions;
use Filament\Resources\Pages\ListRecords;

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
