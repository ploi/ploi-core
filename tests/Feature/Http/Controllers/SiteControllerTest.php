<?php

use App\Mail\Admin\Site\AdminSiteCreatedEmail;
use App\Models\Server;
use App\Models\Site;
use App\Models\User;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Mail;

use function Pest\Laravel\actingAs;
use function Pest\Laravel\assertDatabaseHas;
use function Pest\Laravel\post;

it('can create a new site', function () {
    Mail::fake();

    Http::fake([
        '*' => Http::response([
            'data' => [
                'id' => 1,
                'server_id' => 12345,
                'domain' => 'example.ploi.io',
                'status' => Site::STATUS_ACTIVE,
            ],
        ], 201),
    ]);

    $adminUsers = User::factory(2)->admin()->create();

    setting(['receive_email_on_site_creation' => true]);
    App::forgetInstance('settings');

    actingAs(
        $user = User::factory()->withPackage()->create()
    );

    $server = Server::factory()
        ->ploiId('12345')
        ->withUser($user)
        ->create();

    post(route('sites.store'), ['domain' => 'example.ploi.io'])
        ->assertSessionHasNoErrors()
        ->assertRedirect();

    assertDatabaseHas(Site::class, [
        'status' => Site::STATUS_ACTIVE,
        'ploi_id' => 1,
        'domain' => 'example.ploi.io',
        'server_id' => $server->id,
    ]);

    Mail::assertQueued(AdminSiteCreatedEmail::class, fn (AdminSiteCreatedEmail $mail) => $mail->to[0]['address'] === $adminUsers[0]->email);
    Mail::assertQueued(AdminSiteCreatedEmail::class, fn (AdminSiteCreatedEmail $mail) => $mail->to[0]['address'] === $adminUsers[1]->email);
});
