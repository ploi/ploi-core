<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\ServerAttachRequest;
use App\Http\Resources\Admin\SiteResource;
use App\Models\Server;
use App\Models\Site;
use App\Models\User;
use Illuminate\Http\Request;

class SiteController extends Controller
{
    public function index()
    {
        return inertia('Admin/Sites/Index', [
            'filters' => request()->all('search'),
            'sites' => SiteResource::collection(
                Site::query()
                    ->when(request()->input('search'), function ($query, $value) {
                        return $query->where('domain', 'like', '%' . $value . '%');
                    })
                    ->with('server:id,name', 'users:id,name')
                    ->latest()
                    ->paginate(config('core.pagination.per_page'))
                    ->withQueryString()
            ),
        ]);
    }

    public function edit($id)
    {
        $site = Site::findOrFail($id);

        $users = $site->users()->select('id', 'name', 'email')->get()->map(function ($user) {
            return [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
            ];
        });

        return inertia('Admin/Services/Site/Edit', [
            'site' => $site,
            'users' => $users,
        ]);
    }

    public function update(Request $request, $id)
    {
        $site = Site::findOrFail($id);

        $site->update($request->all());

        return redirect()->route('admin.services.index')->with('success', __('Site has been updated'));
    }

    public function destroy($id)
    {
        $site = Site::findOrFail($id);

        $site->delete();

        return redirect()->route('admin.services.index')->with('success', __('Site has been deleted'));
    }

    public function attach(ServerAttachRequest $request, $id)
    {
        /* @var $site Server */
        $site = Site::findOrFail($id);

        $user = User::where('email', $request->input('email'))->first();

        if ( $site->users()->where('email', $request->input('email'))->count() ) {
            return redirect()->back()->withErrors([
                'email' => __('This user is already attached to this site'),
            ]);
        }

        $site->users()->attach($user);

        return redirect()->route('admin.services.sites.edit', $id)->with('success', __('User has been attached'));
    }

    public function detach($id, $userId)
    {
        $site = Site::findOrFail($id);

        $site->users()->detach($userId);

        return redirect()->route('admin.services.sites.edit', $site->id)->with('success', __('User has been detached'));
    }
}
