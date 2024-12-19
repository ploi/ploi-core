<?php

namespace App\DataTransferObjects;

use App\Models\User;
use Illuminate\Support\Arr;
use Spatie\LaravelData\Data;
use Illuminate\Support\Carbon;
use Spatie\LaravelData\Attributes\Validation\Exists;
use Spatie\LaravelData\Attributes\Validation\IntegerType;
use App\DataTransferObjects\Support\Concerns\BelongsToUser;

class AppData extends Data
{
    use BelongsToUser;

    public function __construct(
        public ?int $site_id = null,
        #[IntegerType]
        #[Exists('servers', 'id')]
        public ?int $server_id = null,
        public ?string $type,
        public ?array  $options = [],
        public ?bool $create_database = false,
        #[Exists(User::class, 'id'), IntegerType]
        public ?int    $user_id = null,
        public ?Carbon $created_at = null,
    ) {
    }

    public function toArray(): array
    {
        return Arr::only(parent::toArray(), [
            'id',
            'type',
            'options',
            'created_at',
            'site_id',
            'server_id',
        ]);
    }
}
