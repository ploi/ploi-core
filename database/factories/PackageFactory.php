<?php

namespace Database\Factories;

use App\Models\Package;
use Illuminate\Database\Eloquent\Factories\Factory;

class PackageFactory extends Factory
{
    public function definition(): array
    {
        return [
            'name' => 'Unlimited',
            'maximum_sites' => 0,
            'maximum_servers' => 1,
            'price_hourly' => 0,
            'price_monthly' => 0,
            'price_yearly' => 0,
            'stripe_plan_id' => null,
            'currency' => Package::CURRENCY_EURO,
            'site_permissions' => [
                'create' => true,
                'update' => true,
                'delete' => true,
            ],
            'server_permissions' => [
                'create' => true,
                'update' => true,
                'delete' => true,
            ],
        ];
    }

    public function serverPermissions(array $permissions = []): static
    {
        return $this->set(
            'server_permissions',
            array_merge([
                'create' => true,
                'update' => true,
                'delete' => true,
            ], $permissions)
        );
    }
}
