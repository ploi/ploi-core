<?php

namespace App\Filament\Resources\DocumentationCategories\Pages;

use Filament\Actions\DeleteAction;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;
use App\Filament\Resources\DocumentationCategories\DocumentationCategoryResource;

class EditDocumentationCategory extends EditRecord
{
    protected static string $resource = DocumentationCategoryResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }
}
