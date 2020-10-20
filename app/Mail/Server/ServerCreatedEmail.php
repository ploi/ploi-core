<?php

namespace App\Mail\Server;

use App\Models\User;
use App\Models\Server;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class ServerCreatedEmail extends Mailable implements ShouldQueue
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
            ->subject(__('Your new server is being created'))
            ->markdown('emails.server.new-server');
    }
}
