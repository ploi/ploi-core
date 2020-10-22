<?php

namespace App\Http\Controllers\Profile;

use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Http\Controllers\Controller;

class ProfileSettingController extends Controller
{
    public function index()
    {
        return inertia('Profile/Settings', [
            'profile' => [
                'theme' => auth()->user()->theme,
                'keyboard_shortcuts' => auth()->user()->keyboard_shortcuts,
            ]
        ]);
    }

    public function update(Request $request)
    {
        $this->validate($request, [
            'theme' => [
                'required',
                'string',
                Rule::in(['light', 'dark', 'auto'])
            ]
        ]);

        $request->user()->update([
            'theme' => $request->input('theme'),
            'keyboard_shortcuts' => $request->input('keyboard_shortcuts', true),
        ]);

        return redirect()->route('profile.settings.index')->with('success', __('Instellingen zijn aangepast'));
    }
}
