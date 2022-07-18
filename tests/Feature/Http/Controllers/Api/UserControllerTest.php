<?php

use App\Models\Package;
use App\Models\User;

use function Pest\Laravel\assertDatabaseCount;

it('can list user account', function () {
    $user = User::factory(20)
        ->create();

    $response = api()
        ->get(route('api.user.index'))
        ->assertOk()
        ->collect()
        ->all();

    expect($response)->toBe([
        'data' => User::take(15)
            ->get()
            ->map(fn (User $user) => [
                'id' => $user->id,
                'avatar' => $user->avatar,
                'name' => $user->name,
                'email' => $user->email,
                'package_id' => $user->package_id,
                'blocked' => $user->blocked,
                'created_at' => $user->created_at->toISOString(),
            ])
            ->all(),
        'links' => [
            'first' => route('api.user.index', ['page' => 1]),
            'last' => route('api.user.index', ['page' => 2]),
            'prev' => null,
            'next' => route('api.user.index', ['page' => 2]),
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
                    'url' => route('api.user.index', ['page' => 1]),
                    'label' => '1',
                    'active' => true,
                ],
                [
                    'url' => route('api.user.index', ['page' => 2]),
                    'label' => '2',
                    'active' => false,
                ],
                [
                    'url' => route('api.user.index', ['page' => 2]),
                    'label' => '&raquo;',
                    'active' => false,
                ],
            ],
            'path' => route('api.user.index'),
            'per_page' => 15,
            'to' => 15,
            'total' => 20,
        ],
    ]);
});

it('can create, update and get a user account', function () {
    [$packageA, $packageB] = Package::factory(2)->create();

    $response = api()
        ->post(route('api.user.store'), [
            'id' => 8, // Not fillable.
            'name' => 'John Doe',
            'email' => 'john@example.com',
            'package_id' => $packageB->id,
            'blocked' => null,
        ])
        ->assertCreated()
        ->collect()
        ->all();

    $user = User::sole();

    expect($response)->toBe([
        'data' => [
            'id' => $user->id,
            'avatar' => $user->avatar,
            'name' => $user->name,
            'email' => $user->email,
            'package_id' => $packageB->id,
            'blocked' => null,
            'created_at' => $user->created_at->toISOString(),
        ],
    ]);

    $getResponse = api()
        ->get(route('api.user.show', $user))
        ->assertOk()
        ->collect()
        ->all();

    expect($getResponse)->toBe([
        'data' => [
            'id' => $user->id,
            'avatar' => $user->avatar,
            'name' => $user->name,
            'email' => $user->email,
            'package_id' => $packageB->id,
            'blocked' => null,
            'created_at' => $user->created_at->toISOString(),
        ],
    ]);

    // Update user
    $getResponse = api()
        ->put(route('api.user.update', $user), [
            'name' => 'John Doe II',
            'package_id' => $packageA->id,
        ])
        ->assertOk()
        ->collect()
        ->all();

    $user->refresh();

    expect($getResponse)->toBe([
        'data' => [
            'id' => $user->id,
            'avatar' => $user->avatar,
            'name' => 'John Doe II',
            /** We did not update the old email. */
            'email' => 'john@example.com',
            'package_id' => $packageA->id,
            'blocked' => null,
            'created_at' => $user->created_at->toISOString(),
        ],
    ]);
});

it('can require the name and email for a user account', function () {
    api()
        ->post(route('api.user.store'))
        ->assertInvalid([
            'name',
            'email',
        ]);
});

it('can suspend and unsuspend a user account', function () {
    api()->post(route('api.user.store'), [
        'name' => 'Testaccount',
        'email' => 'test@ploi.io',
    ]);

    $user = User::sole();

    expect($user)
        ->isUserBlocked()->toBeFalse();

    api()
        ->put(route('api.user.update', $user), [
            'blocked' => 'You are blocked.',
        ])
        ->assertOk();

    expect($user->refresh())
        ->isUserBlocked()->toBeTrue()
        ->blocked->toBe('You are blocked.');

    api()
        ->put(route('api.user.update', $user), [
            'blocked' => null
        ])
        ->assertOk();

    expect($user->refresh())
        ->isUserBlocked()->toBeFalse()
        ->blocked->toBeNull();
});

it('can delete a user', function () {
    api()
        ->post(route('api.user.store'), ['name' => 'John Doe', 'email' => 'john@example.com'])
        ->assertCreated();

    assertDatabaseCount(User::class, 1);

    api()
        ->delete(route('api.user.destroy', $user = User::sole()))
        ->assertOk();

    assertDatabaseCount(User::class, 0);
});
