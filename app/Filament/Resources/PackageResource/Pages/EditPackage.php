<?php

namespace App\Filament\Resources\PackageResource\Pages;

use Filament\Pages\Actions;
use Filament\Resources\Pages\EditRecord;
use App\Filament\Resources\PackageResource;

class EditPackage extends EditRecord
{
    protected static string $resource = PackageResource::class;

    protected function getActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
