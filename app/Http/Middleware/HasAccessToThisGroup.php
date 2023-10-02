<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Arr;
use Illuminate\Http\Request;

class HasAccessToThisGroup
{
    public function handle(Request $request, Closure $next, $group)
    {
        if ($group === 'servers') {
            $package = $request->user()->package ?? null;

            if (
                !Arr::get($package->server_permissions ?? [], 'create', false) &&
                !Arr::get($package->server_permissions ?? [], 'update', false) &&
                !Arr::get($package->server_permissions ?? [], 'delete', false)
            ) {
                abort(404);
            }
        }

        return $next($request);
    }
}
