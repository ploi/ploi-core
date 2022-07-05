<?php

namespace App\DataTransferObjects;

use App\DataTransferObjects\Support\Data;
use App\DataTransferObjects\Support\WithUser;
use App\Models\Server;
use App\Models\Site;
use App\Rules\Hostname;
use App\Rules\ValidateMaximumSites;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Spatie\LaravelData\Attributes\Validation\Exists;
use Spatie\LaravelData\Attributes\Validation\IntegerType;
use Spatie\LaravelData\Attributes\Validation\Required;
use Spatie\LaravelData\Attributes\Validation\Rule;
use Spatie\LaravelData\Attributes\Validation\StringType;

class SiteData extends Data
{
    use WithUser;

    public function __construct(
        public ?int $id = null,
        public ?string $status = null,
        #[Exists( Server::class ), IntegerType]
        public ?int $server_id = null,
        #[Required, StringType, Rule( [new Hostname(), new ValidateMaximumSites()] )]
        public string $domain,
        #[IntegerType]
        public ?int $user_id = null,
    ) {}

    public static function fromRequest(Request $request): static
    {
        return static::from($request->only(['server_id', 'domain', 'user_id']));
    }

    public static function authorize(): bool
    {
        if ( auth()->guest() ) {
            return true;
        }

        return auth()->user()->can('create', Site::class);
    }

    public function toArray(): array
    {
        return Arr::only(parent::toArray(), [
            'id',
            'status',
            'server_id',
            'domain',
        ]);
    }
}
