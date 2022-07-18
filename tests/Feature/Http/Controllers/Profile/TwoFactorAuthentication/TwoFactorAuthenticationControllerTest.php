<?php

use App\Models\User;

use function Pest\Laravel\actingAs;
use function Pest\Laravel\put;

it('can enable two factor authentication for a user', function () {
    actingAs($user = User::factory()->create());

    expect($user)
        ->hasTwoFactorEnabled()->toBeFalse();

    put(route('profile.security.two-factor-authentication.create'))
        ->assertRedirect(route('profile.security.index'));

    expect($user->refresh())
        ->hasTwoFactorEnabled()->toBeFalse();
});
