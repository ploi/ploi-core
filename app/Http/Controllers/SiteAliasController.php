<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SiteAliasController extends Controller
{
    public function index($id)
    {
        $site = auth()->user()->sites()->findOrFail($id);

        return inertia('Sites/Aliases', [
            'site' => $site,
        ]);
    }
}
