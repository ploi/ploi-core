<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rules\Password;
use Illuminate\Foundation\Auth\RegistersUsers;

class RegisterController extends Controller
{
    use RegistersUsers;

    protected $redirectTo = RouteServiceProvider::HOME;

    public function __construct()
    {
        $this->middleware('guest');
    }

    public function showRegistrationForm()
    {
        return inertia('Auth/Register');
    }

    protected function validator(array $data)
    {
        $rules = [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => [
                'required',
                'string',
                'confirmed',
                Password::defaults()
            ],
        ];

        if (setting('accept_terms_required')) {
            $rules['terms'] = [
                'accepted'
            ];
        }

        return Validator::make($data, $rules);
    }

    protected function create(array $data)
    {
        $fields = [
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => $data['password'],
        ];

        if ($days = setting('trial')) {
            $fields['trial_ends_at'] = now()->addDays($days);
        }

        return User::create($fields);
    }

    protected function registered(Request $request, $user)
    {
        if (
            setting('default_package') &&
            setting('default_package') != 'false' &&
            !setting('trial')
        ) {
            $user->package_id = setting('default_package');
            $user->save();
        }

        if (setting('trial') && setting('trial_package')) {
            $user->package_id = setting('trial_package');
            $user->save();
        }
    }
}
