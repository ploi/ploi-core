<?php

namespace App\DataTransferObjects;

use App\DataTransferObjects\Support\Data;
use App\Models\User;
use Illuminate\Support\Carbon;
use Spatie\LaravelData\Attributes\Validation\Email;
use Spatie\LaravelData\Attributes\Validation\Max;
use Spatie\LaravelData\Attributes\Validation\Required;
use Spatie\LaravelData\Attributes\Validation\StringType;
use Spatie\LaravelData\Attributes\Validation\Unique;

class UserData extends Data
{
    public function __construct(
        public ?int $id = null,
        public ?string $avatar = null,
        #[Required, StringType, Max(255)]
        public string $name,
        #[Required, StringType, Email, Max(255), Unique(User::class)]
        public string $email,
        public ?Carbon $created_at = null,
    ) {}
}
