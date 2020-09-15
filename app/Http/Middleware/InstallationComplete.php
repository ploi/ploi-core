<?php

namespace App\Http\Middleware;

use Closure;

class InstallationComplete
{
    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        // If its not complete
        if (
            !$request->routeIs('installation-incomplete') &&
            !$this->isInstallationComplete()
        ) {
            return redirect()->route('installation-incomplete');
        }

        // If it is complete, and we're on the installation complete route, redirect to dashboard
        if (
            $request->routeIs('installation-incomplete') &&
            $this->isInstallationComplete()
        ) {
            return redirect()->route('dashboard');
        }


        return $next($request);
    }

    protected function isInstallationComplete()
    {
        return config('app.key') &&
            config('services.ploi.token') &&
            config('services.ploi.core-token');
    }
}
