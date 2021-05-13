<?php

namespace Tests\Browser;

use App\Models\User;
use Tests\DuskTestCase;
use Laravel\Dusk\Browser;

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
