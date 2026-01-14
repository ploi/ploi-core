<?php

namespace App\Filament\Resources\Sites\Pages;

use Filament\Actions\DeleteAction;
use Filament\Actions;
use App\Filament\Resources\Sites\SiteResource;
use Filament\Resources\Pages\EditRecord;

class EditSite extends EditRecord
{
    protected static string $resource = SiteResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }
}
