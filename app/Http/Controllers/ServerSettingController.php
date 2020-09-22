<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ServerSettingController extends Controller
{
    public function show($id)
    {
        $server = auth()->user()->servers()->findOrFail($id);

        return inertia('Servers/Settings', [
            'server' => $server
        ]);
    }
}
