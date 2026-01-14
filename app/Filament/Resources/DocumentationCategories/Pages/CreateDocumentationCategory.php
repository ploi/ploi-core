<?php

namespace App\Filament\Resources\DocumentationCategories\Pages;

use Filament\Resources\Pages\CreateRecord;
use App\Filament\Resources\DocumentationCategories\DocumentationCategoryResource;

class CreateDocumentationCategory extends CreateRecord
{
    protected static string $resource = DocumentationCategoryResource::class;
}
