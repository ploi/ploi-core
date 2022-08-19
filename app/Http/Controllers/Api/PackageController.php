<?php

namespace App\Http\Controllers\Api;

use App\Models\Package;
use App\Http\Controllers\Controller;
use App\DataTransferObjects\PackageData;

class PackageController extends Controller
{
    public function index(): mixed
    {
        return PackageData::collection(Package::paginate());
    }
}
