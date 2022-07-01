<?php

namespace Database\Factories;

use App\Models\ProviderPlan;
use App\Models\ProviderRegion;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProviderFactory extends Factory
{
    public function definition(): array
    {
        return [
            'ploi_id' => null,
            'label' => $this->faker->word(),
            'name' => $this->faker->name(),
            'allowed_plans' => null,
            'allowed_regions' => null,
        ];
    }

    public function withRegion(): static
    {
        return $this->has(ProviderRegion::factory(), 'regions');
    }

    public function withPlan(): static
    {
        return $this->has(ProviderPlan::factory(), 'plans');
    }
}
