<?php

namespace App\Filament\Resources\DocumentationItems\Pages;

use Filament\Actions\DeleteAction;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;
use App\Filament\Resources\DocumentationItems\DocumentationItemResource;

class EditDocumentationItem extends EditRecord
{
    protected static string $resource = DocumentationItemResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }
}
