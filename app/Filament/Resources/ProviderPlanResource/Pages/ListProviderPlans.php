<?php

namespace App\Filament\Resources\ProviderPlanResource\Pages;

use Filament\Resources\Pages\ListRecords;
use App\Filament\Resources\ProviderPlanResource;

class ListProviderPlans extends ListRecords
{
    protected static string $resource = ProviderPlanResource::class;

    protected function getActions(): array
    {
        return [
            //
        ];
    }
}
