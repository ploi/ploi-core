<?php

namespace App\DataTransferObjects;

use App\DataTransferObjects\Support\Concerns\BelongsToUser;
use App\DataTransferObjects\Support\Data;
use App\DataTransferObjects\Support\Rules\CustomRule;
use App\Models\Server;
use App\Models\Site;
use App\Models\User;
use App\Rules\Hostname;
use App\Rules\ValidateMaximumSites;
use Illuminate\Support\Arr;
use Illuminate\Support\Carbon;
use Spatie\LaravelData\Attributes\Validation\Exists;
use Spatie\LaravelData\Attributes\Validation\IntegerType;
use Spatie\LaravelData\Attributes\Validation\StringType;

class SiteData extends Data
{
    use BelongsToUser;

    public function __construct(
        public ?int $id = null,
        public ?string $status = null,
        #[Exists( Server::class, 'id' ), IntegerType]
        public ?int $server_id = null,
        #[StringType, CustomRule(Hostname::class, ValidateMaximumSites::class)]
        public ?string $domain = null,
        #[Exists(User::class, 'id'), IntegerType]
        public ?int $user_id = null,
        public ?Carbon $created_at = null,
    ) {}

    public static function authorize(): bool
    {
        if ( auth()->guest() ) {
            return true;
        }

        return auth()->user()->can('create', Site::class);
    }

    public static function fromModel(Site $site): static
    {
        return static::from(array_merge($site->toArray(), ['user_id' => $site->user->id]));
    }

    public function toArray(): array
    {
        return Arr::only(parent::toArray(), [
            'id',
            'status',
            'server_id',
            'domain',
            'user_id',
            'created_at',
        ]);
    }
}
