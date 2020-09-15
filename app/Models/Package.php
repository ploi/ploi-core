<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Package extends Model
{
    public $fillable = [
        'name',
        'maximum_sites',
        'maximum_servers',
        'server_creation'
    ];

    public $casts = [
        'server_creation' => 'boolean'
    ];

    public function users()
    {
        return $this->hasMany(User::class);
    }

    protected static function booted()
    {
        static::deleting(function ($package) {
            $package->users()->update(['package_id' => null]);
        });
    }
}
