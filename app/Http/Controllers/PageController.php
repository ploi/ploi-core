<?php

namespace App\Http\Controllers;

class PageController extends Controller
{
    public function installationIncomplete()
    {
        return inertia('Core/InstallationIncomplete');
    }
}
