<?php

namespace App\Http\Middleware;

use App\Services\Ploi\Exceptions\Http\Unauthenticated;
use Closure;
use Illuminate\Http\Request;

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
        return $request->bearerToken() &&
            $request->bearerToken() === setting('api_token');
    }
}
