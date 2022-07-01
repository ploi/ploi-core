<?php

use App\Models\User;
use App\Models\Server;
use App\Models\Provider;
use App\Models\ProviderPlan;
use App\Models\ProviderRegion;
use function Pest\Laravel\post;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Mail;
use Database\Factories\PackageFactory;

use function Pest\Laravel\assertDatabaseHas;
use App\Mail\Admin\Server\AdminServerCreatedEmail;

it('can create a new server', function () {
    Mail::fake();

    Http::fake([
        '*' => Http::response([
            'data' => [
                'id' => 2,
                'status' => Server::STATUS_ACTIVE,
                'type' => 'server',
                'ip_address' => '12.34.56.78',
                'internal_ip' => '127.12.34',
                'php_version' => '8.0',
                'installed_php_versions' => ['8.0', '8.1'],
                'mysql_version' => '8.0',
                'sites_count' => 0,
                'monitoring' => false,
            ],
        ], 201),
    ]);

    $adminUsers = User::factory(2)->admin()->create();

    setting(['receive_email_on_server_creation' => true]);
    App::forgetInstance('settings');

    $user = User::factory()->withPackage(fn (PackageFactory $factory) => $factory->has(Provider::factory()->withRegion()->withPlan()))->create();

    $provider = Provider::sole();
    $region = ProviderRegion::sole();
    $plan = ProviderPlan::sole();

    post(route('servers.store'), [
        'ploi_id' => 2,
        'provider_id' => $provider->id,
        'provider_region_id' => $region->id,
        'provider_plan_id' => $plan->id,
        'name' => 'example-server',
        'database_type' => 'postgresql',
    ])
        ->assertRedirect(route('servers.index'));

    assertDatabaseHas(Server::class, [
        'id' => 1,
        'status' => Server::STATUS_ACTIVE,
        'ploi_id' => 2,
        'name' => 'example-server',
        'ip' => '12.34.56.78',
        'internal_ip' => '127.12.34',
        'available_php_versions' => json_encode(['8.0', '8.1']),
        'type' => 'server',
        'provider_id' => $provider->id,
        'provider_plan_id' => $plan->id,
        'provider_region_id' => $region->id,
        'database_type' => 'postgresql',
    ]);

    Mail::assertQueued(AdminServerCreatedEmail::class, fn (AdminServerCreatedEmail $mail) => $mail->to[0]['address'] === $adminUsers[0]->email);
    Mail::assertQueued(AdminServerCreatedEmail::class, fn (AdminServerCreatedEmail $mail) => $mail->to[0]['address'] === $adminUsers[1]->email);
});

it('cannot create a server without permissions', function () {
    $user = User::factory()->withPackage(fn (PackageFactory $factory) => $factory->serverPermissions(['create' => false,])->has(Provider::factory()->withRegion()->withPlan()))->create();

    expect($user->can('create', Server::class))->toBeFalse();

    $provider = Provider::sole();
    $region = ProviderRegion::sole();
    $plan = ProviderPlan::sole();

    post(route('servers.store'), [
        'ploi_id' => 2,
        'provider_id' => $provider->id,
        'provider_region_id' => $region->id,
        'provider_plan_id' => $plan->id,
        'name' => 'example-server',
        'database_type' => 'postgresql',
    ])
        // This might not look so obvious, but for some reason Laravel doesn't throw an unauthorized
        // exception yet. It only does when we call a method like ->collect() on the test response.
        // However, if the validation fails, we get an HTTP failed assertion for a stray request.
        ->assertOk();
});
