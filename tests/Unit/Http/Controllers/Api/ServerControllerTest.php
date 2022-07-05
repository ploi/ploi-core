<?php

use App\Models\Provider;
use App\Models\ProviderPlan;
use App\Models\ProviderRegion;
use App\Models\User;
use Database\Factories\PackageFactory;
use Illuminate\Support\Facades\Mail;

use function Pest\Laravel\post;

it('can create a new server', function () {
    Mail::fake();

    $user = User::factory()->withPackage(fn (PackageFactory $factory) => $factory->has(Provider::factory()->withRegion()->withPlan()))->create();

    $provider = Provider::sole();
    $region = ProviderRegion::sole();
    $plan = ProviderPlan::sole();

    post(route('api.server.store'), [
        'ploi_id' => 2,
        'provider_id' => $provider->id,
        'provider_region_id' => $region->id,
        'provider_plan_id' => $plan->id,
        'name' => 'example-server',
        'database_type' => 'postgresql',
        'user_id' => $user->id,
    ])
        ->assertCreated();
});
