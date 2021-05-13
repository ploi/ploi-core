<?php

namespace Tests\Browser;

use App\Models\User;
use Tests\DuskTestCase;
use Laravel\Dusk\Browser;

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
