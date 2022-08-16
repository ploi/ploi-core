<?php

namespace App\Models;

use DateTimeInterface;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Alert extends Model
{
    use HasFactory;

    const TYPE_INFO = 'info';
    const TYPE_WARNING = 'warning';
    const TYPE_DANGER = 'danger';

    public $fillable = [
        'type',
        'message',
        'expires_at'
    ];

    public $dates = [
        'expires_at'
    ];

    protected $appends = [
        'message_html'
    ];

    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('Y-m-d H:i:s');
    }

    public function messageHtml(): Attribute
    {
        return Attribute::get(function ($value, array $attributes) {
            return Str::of($attributes['message'])
                ->markdown()
                ->trim(PHP_EOL)
                ->replace(PHP_EOL, '<br />')
                ->value();
        });
    }
}
