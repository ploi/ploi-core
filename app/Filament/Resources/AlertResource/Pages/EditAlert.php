<?php

namespace App\Filament\Resources\AlertResource\Pages;

use Filament\Actions;
use Filament\Resources\Pages\EditRecord;
use App\Filament\Resources\AlertResource;

class EditAlert extends EditRecord
{
    protected static string $resource = AlertResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
