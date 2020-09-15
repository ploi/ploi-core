<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Server;
use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(Server::class, function (Faker $faker) {
    return [
        'name' => $faker->slug(2),
        'ip' => $faker->ipv4,
        'internal_ip' => '127.0.0.1',
    ];
});
