<?php

use function Pest\Laravel\get;
use function Pest\Laravel\getJson;

it('redirects guests to the login page', function () {
    get(route('dashboard'))
        ->assertRedirect(route('login'));
});

it('returns an unauthorized response for guests that expect JSON', function () {
    getJson(route('dashboard'))
        ->assertUnauthorized();
});
