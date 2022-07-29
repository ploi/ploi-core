<?php

namespace App\Filament\Resources\ProviderPlanResource\Pages;

use App\Filament\Resources\ProviderPlanResource;
use Filament\Pages\Actions;
use Filament\Resources\Pages\EditRecord;

class EditProviderPlan extends EditRecord
{
    protected static string $resource = ProviderPlanResource::class;

    protected function getActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
