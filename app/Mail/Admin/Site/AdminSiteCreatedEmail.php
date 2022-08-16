<?php

namespace App\Mail\Admin\Site;

use App\Models\Site;
use App\Models\User;
use App\Models\Server;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class AdminSiteCreatedEmail extends Mailable implements ShouldQueue
{
    use Queueable, SerializesModels;

    public User $user;
    public Server $server;
    public Site $site;

    public function __construct(User $user, Server $server, Site $site)
    {
        $this->user = $user;
        $this->server = $server;
        $this->site = $site;
    }

    public function build()
    {
        return $this
            ->subject(__('A user has created a new site'))
            ->markdown('emails.admin.site.new-site');
    }
}
