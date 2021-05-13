<?php

namespace Tests\Browser;

use App\Models\User;
use Tests\DuskTestCase;
use Laravel\Dusk\Browser;

class DashboardTest extends DuskTestCase
{
    /**
     * A Dusk test example.
     *
     * @return void
     */
    public function testDashboard()
    {
        $this->browse(function (Browser $browser) {
            $browser
                ->loginAs(User::first())
                ->visit('/')
                ->assertSee('Dashboard');
        });
    }
}
