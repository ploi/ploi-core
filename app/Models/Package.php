<?php

namespace App\Models;

use App\Casts\PermissionCast;
use Illuminate\Database\Eloquent\Model;

class Package extends Model
{
    public $fillable = [
        'name',
        'maximum_sites',
        'maximum_servers',
        'site_permissions',
        'server_permissions'
    ];

    public $casts = [
        'site_permissions' => PermissionCast::class,
        'server_permissions' => PermissionCast::class,
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
