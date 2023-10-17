<?php

namespace App\Filament\Resources\AlertResource\Pages;

use Filament\Actions;
use App\Filament\Resources\AlertResource;
use Filament\Resources\Pages\ListRecords;
use Illuminate\Contracts\Support\Htmlable;

class ListAlerts extends ListRecords
{
    protected static string $resource = AlertResource::class;

    protected ?string $subheading = 'Alerts are meant to inform your users about things that are going on. For example server migrations, pricing changes. They will display as top-banner inside the panel.';

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
