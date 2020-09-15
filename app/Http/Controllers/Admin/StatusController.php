<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;

class StatusController extends Controller
{
    public function index()
    {
        return inertia('Admin/Status');
    }
}
