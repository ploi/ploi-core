<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CreatePasswordController extends Controller
{
    public function index()
    {
        $user = User::where('email', request('email'))
            ->whereNull('password')
            ->firstOrFail();

        return inertia('Auth/PasswordCreation', [
            'email' => request('email')
        ]);
    }

    public function start(Request $request)
    {
        $this->validate($request, [
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);

        $user = User::where('email', $request->input('email'))->firstOrFail();

        $user->password = $request->input('password');
        $user->save();

        $user->systemLogs()->create([
            'title' => 'Password creation',
            'description' => 'You have set a password for your account'
        ]);

        auth()->login($user);

        return redirect()->route('dashboard');
    }
}
