<?php

namespace App\Filament\Resources\CertificateResource\Pages;

use App\Filament\Resources\CertificateResource;
use Filament\Pages\Actions;
use Filament\Resources\Pages\EditRecord;

class EditCertificate extends EditRecord
{
    protected static string $resource = CertificateResource::class;

    protected function getActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
