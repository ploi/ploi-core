<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\AlertRequest;
use App\Models\Alert;
use Illuminate\Http\Request;

class AlertController extends Controller
{
    public function index()
    {
        return inertia('Admin/Alerts/Index', [
            'alerts' => Alert::query()->latest()->paginate()
        ]);
    }

    public function create()
    {
        return inertia('Admin/Alerts/Create');
    }

    public function store(AlertRequest $request)
    {
        Alert::create($request->all());

        return redirect()->route('admin.alerts.index');
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return inertia('Admin/Alerts/Edit', [
            'alert' => Alert::findOrFail($id)
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(AlertRequest $request, $id)
    {
        Alert::findOrFail($id)->update($request->all());

        return redirect()->route('admin.alerts.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Alert::findOrFail($id)->delete();

        return redirect()->route('admin.alerts.index');
    }
}
