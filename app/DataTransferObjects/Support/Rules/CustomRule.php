<?php

namespace App\DataTransferObjects\Support\Rules;

use Attribute;
use Spatie\LaravelData\Attributes\Validation\CustomValidationAttribute;
use Spatie\LaravelData\Support\Validation\ValidationPath;

#[Attribute(Attribute::TARGET_PROPERTY | Attribute::TARGET_PARAMETER)]
class CustomRule extends CustomValidationAttribute
{
    protected array $rules = [];

    public function __construct(...$rules)
    {
        $this->rules = $rules;
    }

    /**
     * @return array<object|string>|object|string
     */
    public function getRules(ValidationPath $path): array|object|string
    {
        return array_map(
            fn(string $ruleClass) => new $ruleClass(),
            $this->rules
        );
    }
}
