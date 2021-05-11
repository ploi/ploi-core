<?php

namespace Tests\Browser;

use App\Models\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

class ProfileChangeTest extends DuskTestCase
{
    /**
     * A Dusk test example.
     *
     * @return void
     */
    public function testProfileChange()
    {
        $this->browse(function (Browser $browser) {
            $browser
                ->loginAs(User::query()->where('role', User::ADMIN)->first())
                ->visit('/profile')
                ->press('Save Changes')
                ->pause(250)
                ->assertSee('Success')
                ->assertSee('Profile saved');
        });
    }
}
