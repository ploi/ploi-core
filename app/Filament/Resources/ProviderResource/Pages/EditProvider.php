<?php

namespace App\Filament\Resources\ProviderResource\Pages;

use App\Filament\Resources\ProviderResource;
use Filament\Pages\Actions;
use Filament\Resources\Pages\EditRecord;

class EditProvider extends EditRecord
{
    protected static string $resource = ProviderResource::class;

    protected function getActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
