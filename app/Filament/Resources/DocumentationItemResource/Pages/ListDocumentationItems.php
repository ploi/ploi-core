<?php

namespace App\Filament\Resources\DocumentationItemResource\Pages;

use Filament\Pages\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;
use App\Filament\Resources\DocumentationItemResource;

class ListDocumentationItems extends ListRecords
{
    protected static string $resource = DocumentationItemResource::class;

    protected function getActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
