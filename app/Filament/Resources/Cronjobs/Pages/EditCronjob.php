<?php

namespace App\Filament\Resources\Cronjobs\Pages;

use Filament\Actions\DeleteAction;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;
use App\Filament\Resources\Cronjobs\CronjobResource;

class EditCronjob extends EditRecord
{
    protected static string $resource = CronjobResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }
}
