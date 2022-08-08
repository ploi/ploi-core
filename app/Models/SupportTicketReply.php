<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Str;

class SupportTicketReply extends Model
{
    public $fillable = [
        'content',
    ];

    protected $appends = [
        'content_html',
    ];

    protected $touches = [
        'supportTicket',
    ];

    public function supportTicket(): BelongsTo
    {
        return $this->belongsTo(SupportTicket::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
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
