<?php

namespace App\DataTransferObjects;

use App\Models\User;
use App\Models\Server;
use App\Models\Provider;
use App\Models\ProviderPlan;
use App\Models\ProviderRegion;
use Illuminate\Support\Carbon;
use App\DataTransferObjects\Support\Data;
use Spatie\LaravelData\Attributes\Validation\In;
use Spatie\LaravelData\Attributes\Validation\Max;
use Spatie\LaravelData\Attributes\Validation\NotIn;
use Spatie\LaravelData\Attributes\Validation\Exists;
use Spatie\LaravelData\Attributes\Validation\AlphaDash;
use Spatie\LaravelData\Attributes\Validation\StringType;
use Spatie\LaravelData\Attributes\Validation\IntegerType;
use App\DataTransferObjects\Support\Concerns\BelongsToUser;

class ServerData extends Data
{
    use BelongsToUser;

    public function __construct(
        public ?int $id = null,
        #[StringType]
        public ?string $status = null,
        #[StringType, AlphaDash, Max(40)]
        public string $name,
        #[NotIn(0), Exists(Provider::class, 'id')]
        public int $provider_id,
        #[NotIn(0), Exists(ProviderRegion::class, 'id')]
        public int $provider_region_id,
        #[NotIn(0), Exists(ProviderPlan::class, 'id')]
        public int $provider_plan_id,
        #[StringType, In(['mysql', 'mariadb', 'postgresql', 'postgresql13'])]
        public string $database_type,
        #[Exists(User::class, 'id'), IntegerType]
        public ?int $user_id = null,
        public ?Carbon $created_at = null,
    ) {
    }

    public static function fromModel(Server $server): static
    {
        return static::from(array_merge($server->toArray(), ['user_id' => $server->user->id]));
    }
}
