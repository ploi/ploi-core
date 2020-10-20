<?php

namespace App\Http\Controllers\Admin;

use App\Models\Package;
use App\Models\Provider;
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
        $providers = Provider::get(['name', 'label', 'id'])->pluck('nameWithLabel', 'id');

        return inertia('Admin/Packages/Create', [
            'providers' => $providers
        ]);
    }

    public function store(PackageRequest $request)
    {
        $package = Package::create($request->validated());

        $package->providers()->sync($request->input('providers'));

        return redirect()->route('admin.packages.index')->with('success', __('Package has been created'));
    }

    public function edit($id)
    {
        $package = Package::with('providers:id')->findOrFail($id);

        $providers = Provider::get(['name', 'label', 'id'])->pluck('nameWithLabel', 'id');

        return inertia('Admin/Packages/Edit', [
            'package' => $package,
            'providers' => $providers,
            'syncedProviders' => $package->providers->pluck('id')
        ]);
    }

    public function update(PackageRequest $request, $id)
    {
        $package = Package::findOrFail($id);

        $package->update($request->validated());

        $package->providers()->sync($request->input('providers'));

        return redirect()->route('admin.packages.index')->with('success', __('Package has been updated'));
    }

    public function destroy($id)
    {
        $package = Package::findOrFail($id);

        $package->delete();

        return redirect()->route('admin.packages.index')->with('success', __('Package has been removed'));
    }
}
