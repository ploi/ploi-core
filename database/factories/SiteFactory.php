<?php

namespace Database\Factories;

use App\Models\Server;
use App\Models\Site;
use App\Models\User;
use Closure;
use Illuminate\Database\Eloquent\Factories\Factory;

class SiteFactory extends Factory
{
    public function definition(): array
    {
        return [
            'status' => Site::STATUS_ACTIVE,
            'ploi_id' => null,
            'domain' => $this->faker->word(),
            'project' => null,
            'php_version' => 7.4,
            'dns_id' => null,
            'server_id' => null,
        ];
    }

    public function withServer(Server $server): static
    {
        return $this->set('server_id', $server);
    }

    public function domain(string $domain): static
    {
        return $this->set('domain', $domain);
    }

    public function withUser(User|Closure $user): static
    {
        return $this->afterCreating(function(Site $site) use ($user): void {
           $site->users()->attach($user);
        });
    }
}
