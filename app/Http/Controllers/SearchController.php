<?php

namespace App\Http\Controllers;

use App\Models\Site;
use App\Models\Server;
use Illuminate\Http\Request;
use App\Models\SupportTicket;

class SearchController extends Controller
{
    public function handle(Request $request)
    {
        $collected = collect();

        // Search Servers
        $servers = $request->user()->servers()
            ->where(function ($query) use ($request) {
                return $query
                    ->where('name', 'like', '%' . $request->input('query') . '%')
                    ->orWhere('ip', 'like', '%' . $request->input('query') . '%');
            })
            ->select(['id', 'name', 'ip'])
            ->get();

        $mappedServers = $servers->map(function (Server $server) {
            return [
                'name' => $server->name,
                'ip' => $server->ip,
                'route' => route('servers.show', $server->id),
            ];
        });

        if ($serversCount = $mappedServers->count()) {
            $collected[] = [
                'total' => $serversCount,
                'results' => $mappedServers,
                'label' => __('Servers')
            ];
        }

        $sites = Site::query()
            ->whereHas('users', function ($query) {
                return $query->where('user_service.user_id', auth()->id());
            })
            ->select(['id', 'domain'])
            ->orderBy('domain', 'ASC')
            ->where(function ($query) use ($request) {
                return $query
                    ->where('domain', 'like', '%' . $request->input('query') . '%');
            })
            ->get();

        $mappedSites = $sites->map(function (Site $site) {
            return [
                'name' => $site->domain,
                'route' => route('sites.show', $site->id),
            ];
        });

        if ($sitesCount = $mappedSites->count()) {
            $collected[] = [
                'total' => $sitesCount,
                'results' => $mappedSites,
                'label' => __('Sites')
            ];
        }

        $tickets = $request->user()->supportTickets()
            ->where(function ($query) use ($request) {
                return $query
                    ->where('title', 'like', '%' . $request->input('query') . '%');
            })
            ->get();

        $mappedTickets = $tickets->map(function (SupportTicket $ticket) {
            return [
                'name' => $ticket->title,
                'route' => route('support.show', $ticket->id),
            ];
        });

        if ($ticketsCount = $mappedTickets->count()) {
            $collected[] = [
                'total' => $ticketsCount,
                'results' => $mappedTickets,
                'label' => __('Support requests')
            ];
        }

        return [
            'total' => $collected->count(),
            'results' => $collected,
        ];
    }
}
