<?php

namespace App\Filament\Resources\DocumentationCategoryResource\Pages;

use Filament\Pages\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;
use App\Filament\Resources\DocumentationCategoryResource;

class ListDocumentationCategories extends ListRecords
{
    protected static string $resource = DocumentationCategoryResource::class;

    protected function getActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
