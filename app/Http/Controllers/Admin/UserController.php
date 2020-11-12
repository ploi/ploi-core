<?php

namespace App\Http\Controllers\Admin;

use App\Models\User;
use App\Models\Package;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\UserRequest;

class UserController extends Controller
{
    public function index()
    {
        $users = User::with('package:id,name')
            ->when(request()->input('search'), function ($query, $value) {
                return $query->where('name', 'like', '%' . $value . '%')->orWhere('email', 'like', '%' . $value . '%');
            })
            ->latest()
            ->paginate(5);

        return inertia('Admin/Users/Index', [
            'filters' => request()->all('search'),
            'users' => $users
        ]);
    }

    public function create()
    {
        $packages = Package::orderBy('name')->pluck('name', 'id');

        return inertia('Admin/Users/Create', [
            'packages' => $packages,
            'languages' => languages(),
            'defaultPackage' => (string)setting('default_package'),
            'defaultLanguage' => (string)setting('default_language', 'en'),
        ]);
    }

    public function store(UserRequest $request)
    {
        $user = User::create($request->all());

        if ($request->input('role') === User::ADMIN) {
            $user->role = User::ADMIN;
            $user->save();
        }

        if ($package = $request->input('package')) {
            $user->package_id = $package;
            $user->save();
        }

        return redirect()->route('admin.users.index')->with('success', 'User ' . $user->name . ' has been created');
    }

    public function show($id)
    {
        // TODO: Implement show feature for a user
    }

    public function edit($id)
    {
        $packages = Package::orderBy('name')->pluck('name', 'id');

        return inertia('Admin/Users/Edit', [
            'user' => User::findOrFail($id),
            'packages' => $packages,
            'languages' => languages()
        ]);
    }

    public function update(UserRequest $request, $id)
    {
        $user = User::findOrFail($id);

        $user->update($request->all());

        if ($request->input('role') !== $user->role) {
            $user->role = $request->input('role');
            $user->save();
        }

        if ($request->input('package') !== $user->package_id) {
            $user->package_id = $request->input('package');
            $user->save();
        }

        return redirect()->route('admin.users.index')->with('success', 'User ' . $user->name . ' has been updated');
    }

    public function destroy($id)
    {
        User::findOrFail($id)->delete();

        return redirect()->route('admin.users.index')->with('success', 'User has been deleted');
    }
}
