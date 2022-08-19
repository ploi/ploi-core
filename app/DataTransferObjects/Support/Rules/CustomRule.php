<?php

namespace App\DataTransferObjects\Support\Rules;

use Attribute;
use Spatie\LaravelData\Attributes\Validation\ValidationAttribute;

#[Attribute(Attribute::TARGET_PROPERTY)]
class CustomRule extends ValidationAttribute
{
    protected array $rules = [];

    public function __construct(...$rules)
    {
        $this->rules = $rules;
    }

    public function getRules(): array
    {
        return collect($this->rules)
            ->map(fn (string $rule) => new $rule())
            ->all();
    }
}
