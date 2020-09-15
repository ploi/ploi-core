<?php

namespace App\Http\Controllers;

use App\Jobs\Certificates\CreateCertificate;
use App\Jobs\Certificates\DeleteCertificate;
use App\Http\Requests\SiteCertificateRequest;
use App\Http\Resources\SiteCertificateResource;

class SiteCertificateController extends Controller
{
    public function index($id)
    {
        $site = auth()->user()->sites()->findOrFail($id);

        return inertia('Sites/Certificates', [
            'site' => $site,
            'certificates' => SiteCertificateResource::collection($site->certificates()->latest()->paginate())
        ]);
    }

    public function store(SiteCertificateRequest $request, $id)
    {
        $site = auth()->user()->sites()->findOrFail($id);

        $certificate = $site->certificates()->create([
            'domain' => $request->input('domain'),
        ]);

        $certificate->server_id = $site->server_id;
        $certificate->save();

        dispatch(new CreateCertificate($certificate));

        return redirect()->route('sites.certificates.index', $id)->with('success', __('Certificate has been created'));
    }

    public function destroy($id, $certificateId)
    {
        $site = auth()->user()->sites()->findOrFail($id);

        $certificate = $site->certificates()->findOrFail($certificateId);

        dispatch(new DeleteCertificate($site->server->ploi_id, $site->ploi_id, $certificate->ploi_id));

        $certificate->delete();

        return redirect()->route('sites.certificates.index', $id)->with('success', __('Certificate has been deleted'));
    }
}
