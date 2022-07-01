<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class ProviderRegionFactory extends Factory
{
    public function definition(): array
    {
        return [
            'region_id' => null,
            'label' => $this->faker->word(),
            'provider_id' => null,
        ];
    }
}
