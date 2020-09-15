<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;

class SynchronizeSiteController extends Controller
{
    public function index()
    {
        return inertia('Admin/Services/Sites');
    }
}
