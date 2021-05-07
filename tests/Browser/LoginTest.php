<?php

namespace Tests\Browser;

use App\Models\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class LoginTest extends DuskTestCase
{
    public function testLogin()
    {
        $this->browse(function (Browser $browser) {
            $browser
                ->loginAs(User::query()->where('role', User::ADMIN)->first())
                ->visit('/')
                ->assertUrlIs(config('app.url') . '/');

            $browser->visit('/admin')
                ->assertSee('Administration');
        });
    }
}
