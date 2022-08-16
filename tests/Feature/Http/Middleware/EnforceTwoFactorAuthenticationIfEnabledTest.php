<?php

use App\Models\User;

use function Pest\Laravel\get;

use function Pest\Laravel\actingAs;
use Illuminate\Support\Facades\Auth;

it('will not enforce two factor authentication with guests', function () {
    get(route('login'))
        ->assertOk();
});

it('will not enforce two factor authentication with users without two factor authentication enabled', function () {
    get(route('login'))
        ->assertOk();

    actingAs($user = User::factory()->create());

    get(route('dashboard'))
        ->assertOk();
});

it('will enforce two factor authentication with users with two factor authentication enabled', function () {
    get(route('login'))
        ->assertOk();

    actingAs(
        $user = User::factory()->withTwoFactorAuthentication()->create()
    );

    get(route('dashboard'))
        ->assertRedirect(route('auth.confirm-2fa.index'));
});

it('will not enforce two factor authentication with users with two factor authentication enabled when the user was already authenticated', function () {
    get(route('login'))
        ->assertOk();

    actingAs(
        $user = User::factory()->withTwoFactorAuthentication()->create()
    );

    session()->put('auth.two_factor_authenticated_at', now());

    get(route('dashboard'))
        ->assertOk();

    expect(session()->get('auth.two_factor_authenticated_at'))
        ->toDateTimeString()
        ->toBe(now()->toDateTimeString());

    Auth::logout();

    expect(session()->get('auth.two_factor_authenticated_at'))
        ->toBeNull();
});
