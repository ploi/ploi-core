<?php

namespace App\DataTransferObjects;

use App\DataTransferObjects\Support\Concerns\BelongsToUser;
use App\DataTransferObjects\Support\Data;
use App\Models\Provider;
use App\Models\ProviderPlan;
use App\Models\ProviderRegion;
use App\Models\User;
use Spatie\LaravelData\Attributes\Validation\AlphaDash;
use Spatie\LaravelData\Attributes\Validation\Exists;
use Spatie\LaravelData\Attributes\Validation\In;
use Spatie\LaravelData\Attributes\Validation\IntegerType;
use Spatie\LaravelData\Attributes\Validation\Max;
use Spatie\LaravelData\Attributes\Validation\NotIn;
use Spatie\LaravelData\Attributes\Validation\StringType;

class ServerData extends Data
{
    use BelongsToUser;

    public function __construct(
        #[StringType, AlphaDash, Max( 40 )]
        public string $name,
        #[NotIn( 0 ), Exists( Provider::class, 'id' )]
        public int $provider_id,
        #[NotIn( 0 ), Exists( ProviderRegion::class, 'id' )]
        public int $provider_region_id,
        #[NotIn( 0 ), Exists( ProviderPlan::class, 'id' )]
        public int $provider_plan_id,
        #[StringType, In( ['mysql', 'mariadb', 'postgresql', 'postgresql13'] )]
        public string $database_type,
        #[Exists( User::class, 'id' ), IntegerType]
        public ?int $user_id = null,
    ) {}
}
