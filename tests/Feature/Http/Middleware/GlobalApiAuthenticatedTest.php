<?php

use Illuminate\Support\Facades\App;

use function Pest\Laravel\get;

it('cannot use the API when a user doesn\'t have the API enabled', function () {
    expect(setting('enable_api'))->toBeNull();
    expect(setting('api_token'))->toBeNull();

    get(route('api.user.index'))
        ->assertNotFound();

    setting(['enable_api' => true,]);
    setting(['api_token' => encrypt('secret')]);

    App::forgetInstance('settings');

    expect(setting('enable_api'))->toBeTrue();
    expect(setting('api_token'))->not->toBeNull();

    get(route('api.user.index'))
        ->assertForbidden();

    get(route('api.user.index'), ['Authorization' => 'Bearer wrong-secret'])
        ->assertForbidden();

    get(route('api.user.index'), ['Authorization' => 'Bearer secret'])
        ->assertOk();
});
