<?php

namespace App\DataTransferObjects;

use App\Models\Site;
use App\Models\Server;
use App\Rules\Hostname;
use Illuminate\Http\Request;
use App\Rules\ValidateMaximumSites;
use App\DataTransferObjects\Support\Data;
use Spatie\LaravelData\Attributes\Validation\Rule;
use Spatie\LaravelData\Attributes\Validation\Exists;
use Spatie\LaravelData\Attributes\Validation\Required;
use Spatie\LaravelData\Attributes\Validation\StringType;

class SiteData extends Data
{
    public function __construct(
        public ?int $id = null,
        public ?string $status = null,
        #[Exists(Server::class)]
        public ?int $server_id,
        #[Required,
        StringType,
        Rule([new Hostname(), new ValidateMaximumSites()])]
        public string $domain,
    ) {
    }

    public static function fromRequest(Request $request): static
    {
        return static::from($request->only(['server_id', 'domain']));
    }

    public static function authorize(): bool
    {
        return dump(auth()->user()->can('create', Site::class));
    }
}
