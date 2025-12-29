<?php

namespace App\Filament\Resources\Providers\Pages;

use Filament\Resources\Pages\EditRecord;
use App\Filament\Resources\Providers\ProviderResource;

class EditProvider extends EditRecord
{
    protected static string $resource = ProviderResource::class;
}
