<?php

namespace App\DataTransferObjects;

use App\Models\User;
use App\Models\Package;
use Illuminate\Support\Carbon;
use App\DataTransferObjects\Support\Data;
use Spatie\LaravelData\Attributes\Validation\Max;
use Spatie\LaravelData\Attributes\Validation\Email;
use Spatie\LaravelData\Attributes\Validation\Exists;
use Spatie\LaravelData\Attributes\Validation\Unique;
use Spatie\LaravelData\Attributes\Validation\StringType;
use Spatie\LaravelData\Attributes\Validation\IntegerType;

class UserData extends Data
{
    public function __construct(
        public ?int $id = null,
        public ?string $avatar = null,
        #[StringType,
        Max(255)]
        public ?string $name = null,
        #[StringType,
        Email,
        Max(255),
        Unique(User::class)]
        public ?string $email = null,
        #[Exists(Package::class, 'id'),
        IntegerType]
        public ?int $package_id = null,
        #[StringType]
        public ?string $blocked = null,
        public ?Carbon $created_at = null,
    ) {
    }
}
