<?php

namespace App\Http\Controllers;

use App\Http\Requests\SiteDnsRequest;
use App\Models\Site;
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

    public function store(SiteDnsRequest $request, $id)
    {
        $site = auth()->user()->sites()->findOrFail($id);

        $dns = $this->getDnsInstance($site);

        $dns->addRecord(
            $request->input('name'),
            $request->input('address'),
        );

        return redirect()->route('sites.dns.index', $id)->with('success', __('DNS record has been created'));
    }

    public function update(Request $request, $id)
    {
        //
    }

    public function records($id)
    {
        $site = auth()->user()->sites()->findOrFail($id);

        $dns = $this->getDnsInstance($site);

        return $dns->listRecords();
    }

    public function destroy($id, $recordId)
    {
        $site = auth()->user()->sites()->findOrFail($id);

        $dns = $this->getDnsInstance($site);

        $dns->deleteRecord($recordId);

        return redirect()->route('sites.dns.index', $id)->with('success', __('DNS record has been removed'));
    }

    private function getDnsInstance(Site $site)
    {
        $provider = auth()->user()->providers()->where('type', UserProvider::TYPE_CLOUDFLARE)->first();

        $cloudflare = new Cloudflare(decrypt(Arr::get($provider->meta, 'cloudflare_email')), decrypt($provider->token));
        $cloudflare->zone(decrypt($site->dns_id));

        return $cloudflare;
    }
}
