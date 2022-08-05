<?php

namespace App\Filament\Resources\DocumentationItemResource\Pages;

use App\Filament\Resources\DocumentationItemResource;
use Filament\Pages\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

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
