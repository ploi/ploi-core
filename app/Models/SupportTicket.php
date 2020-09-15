<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SupportTicket extends Model
{
    const STATUS_OPEN = 'open';
    const STATUS_CLOSED = 'closed';
    const STATUS_SUPPORT_REPLY = 'support_reply';
    const STATUS_CUSTOMER_REPLY = 'customer_reply';

    public $fillable = [
        'title',
        'content'
    ];

    public function replies()
    {
        return $this->hasMany(SupportTicketReply::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function scopeClosed($query)
    {
        return $query->where('status', self::STATUS_CLOSED);
    }
}
