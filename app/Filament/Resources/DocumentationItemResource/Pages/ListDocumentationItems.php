<?php

namespace App\Filament\Resources\DocumentationItemResource\Pages;

use Filament\Actions;
use Filament\Resources\Pages\ListRecords;
use App\Filament\Resources\DocumentationItemResource;

class ListDocumentationItems extends ListRecords
{
    protected static string $resource = DocumentationItemResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
