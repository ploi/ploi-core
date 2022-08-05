<?php

namespace App\Filament\Resources\DocumentationItemResource\Pages;

use App\Filament\Resources\DocumentationItemResource;
use Filament\Pages\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditDocumentationItem extends EditRecord
{
    protected static string $resource = DocumentationItemResource::class;

    protected function getActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }
}
