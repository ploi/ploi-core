<?php

namespace Database\Factories;

use App\Models\User;
use App\Models\Server;
use Illuminate\Database\Eloquent\Factories\Factory;

class ServerFactory extends Factory
{
    protected $model = Server::class;

    public function definition(): array
    {
        return [
            'status' => Server::STATUS_ACTIVE,
            'ploi_id' => null,
            'name' => $this->faker->word()
        ];
    }

    public function withUser(User $user): static
    {
        return $this->afterCreating(function (Server $model) use ($user) {
            $model->users()->attach($user);
        });
    }

    public function ploiId(string $ploiId): static
    {
        return $this->set('ploi_id', $ploiId);
    }
}
