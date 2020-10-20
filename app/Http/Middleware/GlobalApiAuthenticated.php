<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use App\Services\Ploi\Exceptions\Http\Unauthenticated;

class GlobalApiAuthenticated
{
    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        if (!$this->isAuthenticated($request)) {
            throw new Unauthenticated('Unauthenticated for global access.');
        }

        return $next($request);
    }

    protected function isAuthenticated(Request $request)
    {
        return
            setting('enable_api') &&
            setting('api_token') &&
            $request->bearerToken() &&
            $request->bearerToken() === decrypt(setting('api_token'));
    }
}
