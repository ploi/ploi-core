<?php

namespace App\Mail\Support;

use App\Models\SupportTicket;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class NotifyEmailsAboutNewTicket extends Mailable implements ShouldQueue
{
    use Queueable, SerializesModels;

    public $supportTicket;

    /**
     * Create a new message instance.
     *
     * @param SupportTicket $supportTicket
     */
    public function __construct(SupportTicket $supportTicket)
    {
        $this->supportTicket = $supportTicket;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this
            ->subject(__('New support ticket received'))
            ->markdown('emails.support.new-ticket-received');
    }
}
