<?php

namespace App\Filament\Resources\DocumentationItems\Pages;

use Filament\Actions\CreateAction;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;
use App\Filament\Resources\DocumentationItems\DocumentationItemResource;

class ListDocumentationItems extends ListRecords
{
    protected static string $resource = DocumentationItemResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
