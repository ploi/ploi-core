<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Str;

class SupportTicket extends Model
{
    const STATUS_OPEN = 'open';
    const STATUS_CLOSED = 'closed';
    const STATUS_SUPPORT_REPLY = 'support_reply';
    const STATUS_CUSTOMER_REPLY = 'customer_reply';

    public $fillable = [
        'title',
        'content',
    ];

    protected $appends = [
        'content_html'
    ];

    public function replies(): HasMany
    {
        return $this->hasMany(SupportTicketReply::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function scopeClosed($query)
    {
        return $query->where('status', self::STATUS_CLOSED);
    }

    public function contentHtml(): Attribute
    {
        return Attribute::get(function ($value, array $attributes) {
            return Str::of($attributes['content'])
                ->markdown()
                ->trim(PHP_EOL)
                ->replace(PHP_EOL, '<br />')
                ->value();
        });
    }
}
