<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Closure;

class UserBlocked
{
    /**
     * Handle an incoming request.
     *
     * @param Request $request
     * @param Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if ($request->user()->isUserBlocked()) {
            $reason = $request->user()->blocked;

            auth()->logout();

            return redirect()->route('login')->withErrors([
                'email' => 'Your account has been blocked: ' . $reason
            ]);
        }


        return $next($request);
    }
}
