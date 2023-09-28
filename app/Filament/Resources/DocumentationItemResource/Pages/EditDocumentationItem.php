<?php

namespace App\Filament\Resources\DocumentationItemResource\Pages;

use Filament\Actions;
use Filament\Resources\Pages\EditRecord;
use App\Filament\Resources\DocumentationItemResource;

class EditDocumentationItem extends EditRecord
{
    protected static string $resource = DocumentationItemResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
