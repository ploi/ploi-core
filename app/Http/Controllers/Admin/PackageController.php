<?php

namespace App\Http\Controllers\Admin;

use App\Models\Package;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\PackageRequest;

class PackageController extends Controller
{
    public function index()
    {
        $packages = Package::withCount('users')->latest()->get();

        return inertia('Admin/Packages/Index', [
            'packages' => $packages,
        ]);
    }

    public function create()
    {
        return inertia('Admin/Packages/Create');
    }

    public function store(PackageRequest $request)
    {
        Package::create($request->validated());

        return redirect()->route('admin.packages.index')->with('success', 'Package has been created');
    }

    public function edit($id)
    {
        return inertia('Admin/Packages/Edit', [
            'package' => Package::findOrFail($id)
        ]);
    }

    public function update(PackageRequest $request, $id)
    {
        $package = Package::findOrFail($id);

        $package->update($request->validated());

        return redirect()->route('admin.packages.index')->with('success', 'Package has been updated');
    }

    public function destroy($id)
    {
        $package = Package::findOrFail($id);

        $package->delete();

        return redirect()->route('admin.packages.index')->with('success', 'Package has been removed');
    }
}
