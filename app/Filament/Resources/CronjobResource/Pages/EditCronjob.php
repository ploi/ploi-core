<?php

namespace App\Filament\Resources\CronjobResource\Pages;

use App\Filament\Resources\CronjobResource;
use Filament\Pages\Actions;
use Filament\Resources\Pages\EditRecord;

class EditCronjob extends EditRecord
{
    protected static string $resource = CronjobResource::class;

    protected function getActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
