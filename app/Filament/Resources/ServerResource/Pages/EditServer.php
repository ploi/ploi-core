<?php

namespace App\Filament\Resources\ServerResource\Pages;

use Filament\Pages\Actions;
use Filament\Resources\Pages\EditRecord;
use App\Filament\Resources\ServerResource;

class EditServer extends EditRecord
{
    protected static string $resource = ServerResource::class;

    protected function getActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
