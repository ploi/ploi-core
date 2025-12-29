<?php

namespace App\Filament\Resources\DocumentationItems\Pages;

use Filament\Resources\Pages\CreateRecord;
use App\Filament\Resources\DocumentationItems\DocumentationItemResource;

class CreateDocumentationItem extends CreateRecord
{
    protected static string $resource = DocumentationItemResource::class;
}
