<?php

namespace App\Filament\Resources\ProviderRegionResource\Pages;

use App\Filament\Resources\ProviderRegionResource;
use Filament\Pages\Actions;
use Filament\Resources\Pages\EditRecord;

class EditProviderRegion extends EditRecord
{
    protected static string $resource = ProviderRegionResource::class;

    protected function getActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
