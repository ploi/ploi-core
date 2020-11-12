<?php

namespace App\Http\Controllers\Admin;

use App\Models\Provider;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\ProviderRequest;

class ProviderController extends Controller
{
    public function edit($id)
    {
        $provider = Provider::findOrFail($id);

        return inertia('Admin/Services/Provider/Edit', [
            'provider' => $provider,
        ]);
    }

    public function update(ProviderRequest $request, $id)
    {
        $provider = Provider::findOrFail($id);

        $provider->update($request->validated());

        return redirect()->route('admin.services.index')->with('success', __('Provider has been updated'));
    }

    public function destroy($id)
    {
        $provider = Provider::findOrFail($id);

        $provider->delete();

        return redirect()->route('admin.services.index')->with('success', __('Provider has been deleted'));
    }
}
