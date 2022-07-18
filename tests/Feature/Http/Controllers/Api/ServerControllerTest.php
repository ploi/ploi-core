<?php

use App\Jobs\Servers\FetchServerStatus;
use App\Models\Provider;
use App\Models\ProviderPlan;
use App\Models\ProviderRegion;
use App\Models\Server;
use App\Models\User;
use Database\Factories\PackageFactory;
use Illuminate\Support\Facades\Bus;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Mail;

use function Pest\Laravel\assertDatabaseHas;

it('can create a new server', function () {
    Mail::fake();

    Http::fake([
        'https://core-api.ploi.io/servers' => Http::response([
            'data' => [
                'id' => 1,
                'status' => 'created',
                'type' => 'server',
                'name' => 'example-server'
            ]
        ])
    ]);

    Bus::fake([FetchServerStatus::class]);

    $user = User::factory()
        ->withPackage(fn (PackageFactory $factory) => $factory->has(Provider::factory()->withRegion()->withPlan()))
        ->create();

    $provider = Provider::sole();
    $region = ProviderRegion::sole();
    $plan = ProviderPlan::sole();

    api()
        ->post(route('api.server.store'), [
        'ploi_id' => 2,
        'provider_id' => $provider->id,
        'provider_region_id' => $region->id,
        'provider_plan_id' => $plan->id,
        'name' => 'example-server',
        'database_type' => 'postgresql',
        'user_id' => $user->id,
    ])
        ->assertCreated();

    assertDatabaseHas(Server::class, [
       'name' => 'example-server',
    ]);

    Bus::assertDispatched(FetchServerStatus::class);
});

it('requires the name, provider_id, provider_region_id, provider_plan_id, database_type', function () {
    api()->post(route('api.server.store'))
        ->assertInvalid([
            'name',
            'provider_id',
            'provider_region_id',
            'provider_plan_id',
            'database_type',
            'user_id',
        ]);
});
