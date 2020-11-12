<?php

namespace App\Http\Controllers\Profile;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\UserProfileRequest;
use App\Http\Resources\UserProfileResource;

class ProfileController extends Controller
{
    public function index()
    {
        return inertia('Profile/Index', [
            'profile' => new UserProfileResource(auth()->user())
        ]);
    }

    public function update(UserProfileRequest $request)
    {
        $request->user()->update($request->validated());

        return redirect()->route('profile.index')->with('success', __('Profile saved'));
    }

    public function toggleTheme(Request $request)
    {
        $mode = 'light';

        if ($request->user()->theme === 'light') {
            $mode = 'dark';
        }

        $request->user()->theme = $mode;
        $request->user()->save();

        return $mode;
    }
}
