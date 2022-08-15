<?php

namespace App\Mail\Database;

use App\Models\Database;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class PasswordReset extends Mailable implements ShouldQueue
{
    use Queueable, SerializesModels;

    public function __construct(
        public Database $database,
        public string $newPassword,
    ) {
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build(): static
    {
        return $this
            ->subject(__('Your database password has been reset'))
            ->markdown('emails.database.password-reset', [
                'database' => $this->database,
                'newPassword' => $this->newPassword,
            ]);
    }
}
