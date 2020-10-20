<?php

namespace App\Http\Controllers\Profile;

use Illuminate\Http\Request;
use App\Rules\MatchOldPassword;
use App\Http\Controllers\Controller;

class ProfilePasswordController extends Controller
{
    public function index()
    {
        return inertia('Profile/Security');
    }

    public function update(Request $request)
    {
        $request->validate([
            'current_password' => ['required', new MatchOldPassword],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);

        $request->user()->update(['password' => $request->input('password')]);

        return redirect()->route('profile.security.index')->with('success', __('Your password has been updated'));
    }
}
