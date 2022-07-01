<?php

use App\Models\User;

it('can list users', function () {
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

it('can create and get a user', function () {
    $response = api()
        ->post(route('api.user.store'), [
            'id' => 8, // Not fillable.
            'name' => 'John Doe',
            'email' => 'john@example.com',
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
            'created_at' => $user->created_at->toISOString(),
        ],
    ]);
});

it('can validate a request', function () {
    api()
        ->post(route('api.user.store'), [
            'email' => 'john@example.com',
        ])
        ->assertStatus(302);
});
