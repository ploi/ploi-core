<?php

namespace App\Filament\Resources\SupportTicketResource\Pages;

use Filament\Pages\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;
use App\Filament\Resources\SupportTicketResource;

class ListSupportTickets extends ListRecords
{
    protected static string $resource = SupportTicketResource::class;

    protected function getActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
