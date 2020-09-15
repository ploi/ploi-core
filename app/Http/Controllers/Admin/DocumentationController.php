<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;

class DocumentationController extends Controller
{
    public function index()
    {
        return inertia('Admin/Documentation/Index');
    }
}
