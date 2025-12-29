<?php

namespace App\Filament\Resources\Subscriptions\Pages;

use Filament\Resources\Pages\ListRecords;
use App\Filament\Resources\Subscriptions\SubscriptionResource;

class ListSubscriptions extends ListRecords
{
    protected static string $resource = SubscriptionResource::class;
}
