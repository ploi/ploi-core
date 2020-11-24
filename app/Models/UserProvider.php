<?php

namespace App\Models;

use App\Casts\Encrypted;
use Illuminate\Database\Eloquent\Model;

class UserProvider extends Model
{
    const TYPE_DNS = 'dns';
    const TYPE_CLOUDFLARE = 'cloudflare';

    public $hidden = [
        'token'
    ];

    public $fillable = [
        'type',
        'token',
        'meta'
    ];

    protected $casts = [
        'meta' => 'array',
        'token' => Encrypted::class,
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
