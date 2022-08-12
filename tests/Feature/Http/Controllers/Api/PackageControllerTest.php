<?php

use App\Models\Package;

it('can list packages', function () {
    $packages = Package::factory(20)
        ->create();

    $response = api()
        ->get(route('api.package.index'))
        ->assertOk()
        ->collect()
        ->all();

    expect($response)->toBe([
        'data' => Package::take(15)
            ->get()
            ->map(fn (Package $package) => [
                'id' => $package->id,
                'name' => $package->name,
                'maximum_servers' => $package->maximum_servers,
                'maximum_sites' => $package->maximum_sites,
                'price_hourly' => $package->price_hourly,
                'price_monthly' => $package->price_monthly,
                'price_yearly' => $package->price_yearly,
                'stripe_plan_id' => $package->stripe_plan_id,
                'currency' => $package->currency,
                'server_permissions' => $package->server_permissions,
                'site_permissions' => $package->site_permissions,
                'created_at' => $package->created_at->toISOString(),
            ])
            ->all(),
        'links' => [
            'first' => route('api.package.index', ['page' => 1]),
            'last' => route('api.package.index', ['page' => 2]),
            'prev' => null,
            'next' => route('api.package.index', ['page' => 2]),
        ],
        'meta' => [
            'current_page' => 1,
            'from' => 1,
            'last_page' => 2,
            'links' => [
                [
                    'url' => null,
                    'label' => '&laquo;',
                    'active' => false,
                ],
                [
                    'url' => route('api.package.index', ['page' => 1]),
                    'label' => '1',
                    'active' => true,
                ],
                [
                    'url' => route('api.package.index', ['page' => 2]),
                    'label' => '2',
                    'active' => false,
                ],
                [
                    'url' => route('api.package.index', ['page' => 2]),
                    'label' => '&raquo;',
                    'active' => false,
                ],
            ],
            'path' => route('api.package.index'),
            'per_page' => 15,
            'to' => 15,
            'total' => 20,
        ],
    ]);
});

