<?php

namespace App\Http\Controllers\Api;

use App\DataTransferObjects\CertificateData;
use App\Http\Controllers\Controller;
use App\Models\Certificate;

class CertificateController extends Controller
{
    public function index(): mixed
    {
        return CertificateData::collection(Certificate::paginate());
    }

    public function store(): void
    {
        // implement logic
    }

    public function show(Certificate $certificate): CertificateData
    {
        return CertificateData::fromModel($certificate);
    }

    public function destroy(Certificate $certificate): void
    {
        $certificate->delete();
    }
}
