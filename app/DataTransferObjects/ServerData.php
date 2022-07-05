<?php

namespace App\DataTransferObjects;

use App\DataTransferObjects\Support\Data;
use App\Models\ProviderPlan;
use App\Models\ProviderRegion;
use Illuminate\Http\Request;
use Spatie\LaravelData\Attributes\Validation\AlphaDash;
use Spatie\LaravelData\Attributes\Validation\Exists;
use Spatie\LaravelData\Attributes\Validation\In;
use Spatie\LaravelData\Attributes\Validation\Max;
use Spatie\LaravelData\Attributes\Validation\NotIn;
use Spatie\LaravelData\Attributes\Validation\StringType;
use Symfony\Contracts\Service\Attribute\Required;

class ServerData extends Data
{
    public function __construct(
        #[Required, StringType, AlphaDash, Max(40)]
        public string $name,
        #[Required, NotIn(0), Exists(ProviderPlan::class, 'id')]
        public int $provider_id,
        #[Required, NotIn(0), Exists(ProviderRegion::class, 'id')]
        public int $provider_region_id,
        #[Required, NotIn(0), Exists(ProviderPlan::class, 'id')]
        public int $provider_plan_id,
        #[Required, StringType, In(['mysql', 'mariadb', 'postgresql', 'postgresql13'])]
        public string $database_type,
    ) {}

    public static function fromRequest(Request $request): static
    {
        return static::from($request->only(['provider_id', 'provider_region_id', 'provider_plan_id', 'name', 'database_type']));
    }
}
