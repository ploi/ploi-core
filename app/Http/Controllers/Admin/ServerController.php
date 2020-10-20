<?php

namespace App\Http\Controllers\Admin;

use App\Models\User;
use App\Models\Server;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\ServerAttachRequest;

class ServerController extends Controller
{
    public function edit($id)
    {
        $server = Server::findOrFail($id);

        $users = $server->users()->select('id', 'name', 'email')->get()->map(function ($user) {
            return [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email
            ];
        });

        return inertia('Admin/Services/Server/Edit', [
            'server' => $server,
            'users' => $users
        ]);
    }

    public function update(Request $request, $id)
    {
        $server = Server::findOrFail($id);

        $server->update($request->all());

        return redirect()->route('admin.services.index')->with('success', __('Server has been updated'));
    }

    public function destroy($id)
    {
        $server = Server::findOrFail($id);

        $server->delete();

        return redirect()->route('admin.services.index')->with('success', __('Server has been deleted'));
    }

    public function attach(ServerAttachRequest $request, $id)
    {
        /* @var $server \App\Models\Server */
        $server = Server::findOrFail($id);

        $user = User::where('email', $request->input('email'))->first();

        if ($server->users()->where('email', $request->input('email'))->count()) {
            return redirect()->back()->withErrors([
                'email' => __('This user is already attached to this server')
            ]);
        }

        $server->users()->attach($user);

        return redirect()->route('admin.services.servers.edit', $id)->with('success', __('User has been attached'));
    }

    public function detach($id, $userId)
    {
        $server = Server::findOrFail($id);

        $server->users()->detach($userId);

        return redirect()->route('admin.services.servers.edit', $server->id)->with('success', __('User has been detached'));
    }
}
