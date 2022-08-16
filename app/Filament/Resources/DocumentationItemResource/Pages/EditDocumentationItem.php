<?php

namespace App\Filament\Resources\DocumentationItemResource\Pages;

use Filament\Pages\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;
use App\Filament\Resources\DocumentationItemResource;

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
