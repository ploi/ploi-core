<?php

namespace App\Filament\Resources\Alerts\Pages;

use Filament\Actions\CreateAction;
use Filament\Actions;
use App\Filament\Resources\Alerts\AlertResource;
use Filament\Resources\Pages\ListRecords;

class ListAlerts extends ListRecords
{
    protected static string $resource = AlertResource::class;

    protected ?string $subheading = 'Alerts are meant to inform your users about things that are going on. For example server migrations, pricing changes. They will display as top-banner inside the panel.';

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
