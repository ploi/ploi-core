<?php

namespace App\Mail\Admin\Server;

use App\Models\User;
use App\Models\Server;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class AdminServerCreatedEmail extends Mailable implements ShouldQueue
{
    use Queueable, SerializesModels;

    public $user;
    public $server;

    /**
     * Create a new message instance.
     *
     * @param User $user
     * @param Server $server
     */
    public function __construct(User $user, Server $server)
    {
        $this->user = $user;
        $this->server = $server;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this
            ->subject(__('A user has created a new server'))
            ->markdown('emails.admin.server.new-server');
    }
}
