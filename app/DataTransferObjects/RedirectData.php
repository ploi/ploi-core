<?php

namespace App\DataTransferObjects;

use App\Models\Redirect;
use App\Models\User;
use Illuminate\Support\Arr;
use Illuminate\Support\Carbon;
use App\DataTransferObjects\Support\Data;
use Spatie\LaravelData\Attributes\Validation\Exists;
use Spatie\LaravelData\Attributes\Validation\IntegerType;
use App\DataTransferObjects\Support\Concerns\BelongsToUser;

class RedirectData extends Data
{
    use BelongsToUser;
    public function __construct(
        public ?int $site_id = null,
        #[IntegerType]
        #[Exists('servers', 'id')]
        public ?int $server_id = null,
        public ?string $redirect_from = null,
        public ?string $redirect_to = null,
        public ?string $type = null,
        #[Exists(User::class, 'id'), IntegerType]
        public ?int    $user_id = null,
        public ?Carbon $created_at = null
    ) {
    }

    public static function authorize(): bool
    {
        return auth()->check() && auth()->user()->can('create', Redirect::class);
    }

    public static function fromModel(Redirect $redirect): static
    {
        return static::from(array_merge($redirect->toArray(), ['site_id' => $redirect->site?->id]));
    }

    public function toArray(): array
    {
        return Arr::only(parent::toArray(), [
            'id',
            'redirect_from',
            'redirect_to',
            'type',
            'created_at',
            'site_id',
            'server_id',
        ]);
    }
}
