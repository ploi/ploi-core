<?php

namespace App\Http\Controllers\Api;

use App\DataTransferObjects\PackageData;
use App\Http\Controllers\Controller;
use App\Models\Package;

class PackageController extends Controller
{
    public function index(): mixed
    {
        return PackageData::collection(Package::paginate());
    }
}
