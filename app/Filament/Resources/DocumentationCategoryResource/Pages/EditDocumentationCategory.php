<?php

namespace App\Filament\Resources\DocumentationCategoryResource\Pages;

use Filament\Actions;
use Filament\Resources\Pages\EditRecord;
use App\Filament\Resources\DocumentationCategoryResource;

class EditDocumentationCategory extends EditRecord
{
    protected static string $resource = DocumentationCategoryResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
