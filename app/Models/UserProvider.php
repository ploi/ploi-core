<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserProvider extends Model
{
    const TYPE_DNS = 'dns';

    public $hidden = [
        'token'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
