<?php

namespace App\Filament\Resources\ProviderPlanResource\Pages;

use App\Filament\Resources\ProviderPlanResource;
use Filament\Pages\Actions;
use Filament\Resources\Pages\ListRecords;

class ListProviderPlans extends ListRecords
{
    protected static string $resource = ProviderPlanResource::class;

    protected function getActions(): array
    {
        return [
            Actions\Action::make('synchronize_providers')
                ->label(__('Synchronize providers'))
                ->action(function () {
                    //
                }),
        ];
    }
}
