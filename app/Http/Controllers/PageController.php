<?php

namespace App\Http\Controllers;

use Illuminate\Support\Str;

class PageController extends Controller
{
    public function installationIncomplete()
    {
        return inertia('Core/InstallationIncomplete');
    }

    public function show($slug)
    {
        if ($slug === 'terms-of-service' && setting('terms')) {
            return inertia('Pages/Terms', [
                'content' => Str::markdown(setting('terms'))
            ]);
        }

        abort(404);
    }
}
