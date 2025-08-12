<?php

namespace Database\Factories;

use Closure;
use App\Models\User;
use App\Models\Package;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Eloquent\Factories\Factory;

class UserFactory extends Factory
{
    protected $model = User::class;

    public function definition(): array
    {
        return [
            'name' => $this->faker->name,
            'email' => $this->faker->unique()->safeEmail,
            'email_verified_at' => now(),
            'password' => 'password', // Will be hashed by the model's cast
            'remember_token' => Str::random(10),
        ];
    }

    public function withTwoFactorAuthentication(): static
    {
        return $this->afterCreating(function (User $model) {
            $model->createTwoFactorAuth();
            $model->enableTwoFactorAuth();
        });
    }

    public function withPackage(Closure $modifyFactory = null): static
    {
        $factory = Package::factory();

        if ($modifyFactory) {
            $factory = $modifyFactory($factory);
        }

        return $this->set('package_id', $factory);
    }

    public function admin(): static
    {
        return $this->set('role', User::ADMIN);
    }
}
