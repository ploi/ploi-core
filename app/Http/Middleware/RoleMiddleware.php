<?php

namespace App\Http\Middleware;

use Closure;
use App\Models\User;
use App\Models\SupportTicket;

class RoleMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next, $role = null)
    {
        abort_if(!$role, 403);

        abort_if($request->user()->role !== $role, 403);

        if ($request->user()->role === User::ADMIN) {
            inertia()->share([
                'openTickets' => SupportTicket::whereIn('status', [
                    SupportTicket::STATUS_OPEN,
                    SupportTicket::STATUS_CUSTOMER_REPLY
                ])->count()
            ]);
        }

        return $next($request);
    }
}
