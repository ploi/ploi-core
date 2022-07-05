<?php

use App\Mail\Admin\Site\AdminSiteCreatedEmail;
use App\Models\Server;
use App\Models\Site;
use App\Models\User;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Mail;

use function Pest\Laravel\assertDatabaseHas;

it('can list sites', function () {
    $server = Server::factory()
        ->create();

    $sites = Site::factory(20)
        ->withServer($server)
        ->create();

    $response = api()
        ->get(route('api.site.index'))
        ->assertOk()
        ->collect()
        ->all();

    expect($response)
        ->toBe([
            'data' => $sites
                ->take(15)
                ->map(fn (Site $site) => [
                    'id' => $site->id,
                    'status' => $site->status,
                    'server_id' => $site->server_id,
                    'domain' => $site->domain,
                ])
                ->all(),
            'links' => [
                'first' => route('api.site.index', ['page' => 1]),
                'last' => route('api.site.index', ['page' => 2]),
                'prev' => null,
                'next' => route('api.site.index', ['page' => 2]),
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
                        'url' => route('api.site.index', ['page' => 1]),
                        'label' => '1',
                        'active' => true,
                    ],
                    [
                        'url' => route('api.site.index', ['page' => 2]),
                        'label' => '2',
                        'active' => false,
                    ],
                    [
                        'url' => route('api.site.index', ['page' => 2]),
                        'label' => '&raquo;',
                        'active' => false,
                    ],
                ],
                'path' => route('api.site.index'),
                'per_page' => 15,
                'to' => 15,
                'total' => 20,
            ],
        ]);
});

it('can create a site', function () {
    Mail::fake();

    Http::fake([
        '*' => Http::response([
            'data' => [
                'id' => 1,
                'server_id' => 12345,
                'domain' => 'example.ploi.io',
                'status' => Site::STATUS_ACTIVE,
                //..
            ],
        ], 201),
    ]);

    $adminUsers = User::factory(2)
        ->admin()
        ->create();

    setting(['receive_email_on_site_creation' => true]);
    App::forgetInstance('settings');

    $user = User::factory()->withPackage()->create();

    $server = Server::factory()
        ->ploiId('12345')
        ->withUser($user)
        ->create();

    $response = api()
        ->post(route('api.site.store'), [
            'domain' => 'example.ploi.io',
            'user_id' => $user->id,
        ])
        ->assertCreated()
        ->collect()
        ->all();

    $site = Site::sole();

    expect($response)->toBe([
        'data' => [
            'id' => 1,
            'status' => Site::STATUS_ACTIVE,
            'server_id' => $server->id,
            'domain' => 'example.ploi.io',
        ],
    ]);

    assertDatabaseHas(Site::class, [
        'status' => Site::STATUS_ACTIVE,
        'ploi_id' => 1,
        'server_id' => $server->id,
        'domain' => 'example.ploi.io',
    ]);

    Mail::assertQueued(AdminSiteCreatedEmail::class, fn (AdminSiteCreatedEmail $mail) => $mail->to[0]['address'] === $adminUsers[0]->email);
    Mail::assertQueued(AdminSiteCreatedEmail::class, fn (AdminSiteCreatedEmail $mail) => $mail->to[0]['address'] === $adminUsers[1]->email);

    $response = api()
        ->get(route('api.site.show', ['site' => $site]))
        ->assertOk()
        ->collect()
        ->all();

    expect($response)->toBe([
        'data' => [
            'id' => 1,
            'status' => Site::STATUS_ACTIVE,
            'server_id' => $server->id,
            'domain' => 'example.ploi.io',
        ],
    ]);
});

it('requires the user id', function () {
    $user = User::factory()->withPackage()->create();

    api()
        ->post(route('api.site.store'), [
            'domain' => 'example.ploi.io',
        ])
        ->assertInvalid('user_id');
});

it('requires the domain', function () {
    $user = User::factory()->withPackage()->create();

    api()
        ->post(route('api.site.store'), [
            'user_id' => 'example.ploi.io',
        ])
        ->assertInvalid('domain');
});
