<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use App\Services\Ploi\Exceptions\Http\Unauthenticated;

class GlobalApiAuthenticated
{
    public function handle(Request $request, Closure $next): mixed
    {
        abort_unless($this->hasApiEnabled(), 404);

        abort_unless($this->isAuthenticated($request), 403);

        if (! $this->isAuthenticated($request)) {
            throw new Unauthenticated('Unauthenticated for global access.');
        }

        return $next($request);
    }

    protected function hasApiEnabled(): bool
    {
        return setting('enable_api') && (bool) setting('api_token');
    }

    protected function isAuthenticated(Request $request)
    {
        return $request->bearerToken()
            && $request->bearerToken() === decrypt(setting('api_token'));
    }
}
