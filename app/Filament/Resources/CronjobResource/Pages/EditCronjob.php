<?php

namespace App\Filament\Resources\CronjobResource\Pages;

use Filament\Actions;
use Filament\Resources\Pages\EditRecord;
use App\Filament\Resources\CronjobResource;

class EditCronjob extends EditRecord
{
    protected static string $resource = CronjobResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
