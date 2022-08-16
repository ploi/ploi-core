<?php

namespace App\Http\Controllers;

use App\Models\Site;
use Illuminate\Support\Arr;
use App\Models\UserProvider;
use App\Services\Cloudflare;
use App\Http\Requests\SiteDnsRequest;
use Illuminate\Http\RedirectResponse;

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

        $state = Arr::only($request->validated(), ['name', 'content', 'type', 'ttl']);

        $dns->addRecord(
            name: $state['name'],
            content: $state['content'],
            type: $state['type'],
            ttl: $state['ttl']
        );

        return redirect()->route('sites.dns.index', $id)->with('success', __('DNS record has been created'));
    }

    public function update($id, $recordId, SiteDnsRequest $request): RedirectResponse
    {
        $site = auth()->user()->sites()->findOrFail($id);

        $state = $request->validated();

        $dns = $this->getDnsInstance($site);

        $success = $dns->updateRecord($recordId, [
            'name' => $state['name'],
            'content' => $state['content'],
            'type' => $state['type'],
            'ttl' => $state['ttl'],
        ]);

        if (is_bool($success) && ! $success) {
            return redirect()->route('sites.dns.index', $id)->with('error', __('Error updating DNS record'));
        }

        return redirect()->route('sites.dns.index', $id)->with('success', __('DNS record saved'));
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
