<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SiteDnsController extends Controller
{
    public function index($id)
    {
        $site = auth()->user()->sites()->findOrFail($id);

        return inertia('Sites/Dns', [
            'site' => $site,
            'records' => []
        ]);
    }

    public function store(Request $request)
    {
        //
    }

    public function update(Request $request, $id)
    {
        //
    }

    public function records($id)
    {
    }

    public function destroy($id)
    {
        //
    }
}
