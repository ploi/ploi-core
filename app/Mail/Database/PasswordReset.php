<?php

namespace App\Mail\Database;

use App\Models\Database;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Queue\SerializesModels;

class PasswordReset extends Mailable implements ShouldQueue
{
    use Queueable, SerializesModels;

    public function __construct(
        public Database $database,
        public string $newPassword,
    ) {}

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build(): MailMessage
    {
        return $this
            ->subject(__('Your database password has been reset'))
            ->markdown('emails.database.password-reset', [
                'database' => $this->database,
                'newPassword' => $this->newPassword,
            ]);
    }
}
