<?php

namespace App\Filament\Resources\AlertResource\Pages;

use Filament\Pages\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;
use App\Filament\Resources\AlertResource;

class EditAlert extends EditRecord
{
    protected static string $resource = AlertResource::class;

    protected function getActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }
}
