<?php

namespace App\Filament\Resources\SiteResource\Pages;

use Filament\Pages\Actions;
use App\Filament\Resources\SiteResource;
use Filament\Resources\Pages\EditRecord;

class EditSite extends EditRecord
{
    protected static string $resource = SiteResource::class;

    protected function getActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
