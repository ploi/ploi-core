<?php

namespace App\Http\Controllers\Profile;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ProfileIntegrationController extends Controller
{
    public function index()
    {
        return inertia('Profile/Integrations');
    }

    public function update()
    {

    }
}
