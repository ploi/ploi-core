<?php

use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        factory(User::class)->create([
            'name' => 'John',
            'email' => 'core@ploi.io',
            'password' => 'test',
            'role' => User::ADMIN
        ]);

        //factory(\App\Models\Server::class, 10)->create();

        \App\Models\Package::create([
            'name' => 'Basic'
        ]);

        \App\Models\Package::create([
            'name' => 'Pro'
        ]);

        \App\Models\Package::create([
            'name' => 'Unlimited'
        ]);

        cache()->flush();
    }
}
