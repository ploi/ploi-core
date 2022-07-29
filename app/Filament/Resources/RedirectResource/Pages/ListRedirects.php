<?php

namespace App\Filament\Resources\RedirectResource\Pages;

use App\Filament\Resources\RedirectResource;
use Filament\Pages\Actions;
use Filament\Resources\Pages\ListRecords;

class ListRedirects extends ListRecords
{
    protected static string $resource = RedirectResource::class;

    protected function getActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
