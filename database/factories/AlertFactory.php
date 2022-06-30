<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class AlertFactory extends Factory
{
    public function definition(): array
    {
        return [
            'message' => $this->faker->word(),
            'type' => $this->faker->paragraph(),
            'expires_at' => now(),
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }

    public function message(string $message): static
    {
        return $this->set('message', $message);
    }
}
