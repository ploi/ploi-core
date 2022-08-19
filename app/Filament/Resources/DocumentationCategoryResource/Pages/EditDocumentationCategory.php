<?php

namespace App\Filament\Resources\DocumentationCategoryResource\Pages;

use Filament\Pages\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;
use App\Filament\Resources\DocumentationCategoryResource;

class EditDocumentationCategory extends EditRecord
{
    protected static string $resource = DocumentationCategoryResource::class;

    protected function getActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }
}
