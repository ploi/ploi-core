<?php

namespace App\Filament\Resources\DocumentationCategories\Pages;

use Filament\Actions\CreateAction;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;
use App\Filament\Resources\DocumentationCategories\DocumentationCategoryResource;

class ListDocumentationCategories extends ListRecords
{
    protected static string $resource = DocumentationCategoryResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
