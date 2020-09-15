<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DatabaseUser extends Model
{
    public $fillable = [
        'name',
    ];

    public function database()
    {
        return $this->belongsTo(Database::class);
    }
}
