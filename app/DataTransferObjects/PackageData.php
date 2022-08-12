<?php

namespace App\DataTransferObjects;

use App\DataTransferObjects\Support\Data;
use Illuminate\Support\Carbon;

class PackageData extends Data
{
    public function __construct(
        // Add validation attributes to this class if we add additional API-endpoints.
        public int $id,
        public ?string $name,
        public ?int $maximum_servers,
        public ?int $maximum_sites,
        public float $price_hourly,
        public float $price_monthly,
        public float $price_yearly,
        public ?string $stripe_plan_id,
        public string $currency,
        public array $server_permissions,
        public array $site_permissions,
        public Carbon $created_at,
    ) {}
}
