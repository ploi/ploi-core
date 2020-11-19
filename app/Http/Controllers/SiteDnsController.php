<?php

namespace App\Http\Controllers;

use App\Models\UserProvider;
use App\Services\Cloudflare;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;

class SiteDnsController extends Controller
{
    public function index($id)
    {
        $site = auth()->user()->sites()->findOrFail($id);

        return inertia('Sites/Dns', [
            'site' => $site,
            'records' => []
        ]);
    }

    public function store(Request $request)
    {
        //
    }

    public function update(Request $request, $id)
    {
        //
    }

    public function records($id)
    {
        $site = auth()->user()->sites()->findOrFail($id);

        $provider = auth()->user()->providers()->where('type', UserProvider::TYPE_CLOUDFLARE)->first();

        $cloudflare = new Cloudflare(decrypt(Arr::get($provider->meta, 'cloudflare_email')), decrypt($provider->token));
        $cloudflare->zone(decrypt($site->dns_id));

        return $cloudflare->listRecords();
    }

    public function destroy($id)
    {
        //
    }
}
