<?php

namespace App\DataTransferObjects;

use Illuminate\Support\Carbon;
use App\DataTransferObjects\Support\Data;
use Spatie\LaravelData\Attributes\Validation\Max;
use Spatie\LaravelData\Attributes\Validation\Email;
use Spatie\LaravelData\Attributes\Validation\Unique;
use Spatie\LaravelData\Attributes\Validation\Required;
use Spatie\LaravelData\Attributes\Validation\StringType;

class UserData extends Data
{
    public function __construct(
        public ?int $id = null,
        public ?string $avatar = null,
        #[Required,
        StringType,
        Max(255)]
        public string $name,
        #[Required,
        StringType,
        Email,
        Max(255),
        Unique('users')]
        public string $email,
        public ?Carbon $created_at = null,
    ) {
    }
}
