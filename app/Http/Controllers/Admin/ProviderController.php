<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\ProviderRequest;
use App\Models\Provider;
use Illuminate\Http\Request;

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
}
