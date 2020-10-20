<?php

namespace App\Mail\User;

use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Support\Facades\URL;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class WelcomeEmail extends Mailable implements ShouldQueue
{
    use Queueable, SerializesModels;

    public $user;
    public $url;

    /**
     * Create a new message instance.
     *
     * @param User $user
     */
    public function __construct(User $user)
    {
        $this->user = $user;

        if (!$user->password) {
            $this->url = URL::temporarySignedRoute(
                'password-creation',
                now()->addMinutes(60),
                ['user' => $user->id, 'email' => $user->email]
            );
        }
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this
            ->subject($this->url ? __('A new account has been created for you') : __('Welcome to :app', ['app' => config('app.name')]))
            ->markdown('emails.user.welcome');
    }
}
