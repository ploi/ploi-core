<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class ProviderPlanFactory extends Factory
{
    public function definition(): array
    {
        return [
            'plan_id' => null,
            'label' => $this->faker->word(),
            'provider_id' => null,
        ];
    }
}
