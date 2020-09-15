<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class Demo
{
    protected $safeRoutes = [
        'login',
        'logout',
        //'profile/toggle-theme'
    ];

    protected $allowedIps = [
        //
    ];

    public function handle(Request $request, Closure $next)
    {
        if ($this->isNotAllowedToDoThis($request)) {
            return redirect('/')->with('info', __('This action is unavailable in the demo mode.'));
        }

        return $next($request);
    }

    protected function isNotAllowedToDoThis($request): bool
    {
        return
            $this->isInDemo() && // App should be in demo mode
            $this->isMethodMatched($request) && // Should match any of these REST request methods
            !$this->isRouteWhitelisted($request) &&  // Should not be included inside the safe routes
            !$this->isIpWhitelisted($request); // Current IP should not be whitelisted
    }

    protected function isInDemo(): bool
    {
        return config('app.demo');
    }

    protected function isMethodMatched(Request $request): bool
    {
        return in_array(strtoupper($request->method()), ['POST', 'PATCH', 'DELETE', 'PUT']);
    }

    protected function isIpWhitelisted(Request $request): bool
    {
        return in_array($request->ip(), $this->allowedIps);
    }

    protected function isRouteWhitelisted(Request $request): bool
    {
        return in_array($request->path(), $this->safeRoutes);
    }
}
