<?php

namespace App\Models;

use App\Casts\PermissionCast;
use Illuminate\Database\Eloquent\Model;

class Package extends Model
{
    const CURRENCY_EURO = 'eur';
    const CURRENCY_USD = 'usd';
    const CURRENCY_NOK = 'nok';
    const CURRENCY_AUD = 'aud';
    const CURRENCY_CAD = 'cad';

    public $fillable = [
        'name',
        'plan_id', // This does not reflect a internal database relation, it reflects the plan ID from the PSP
        'currency',
        'price_hourly',
        'price_monthly',
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

    public function providers()
    {
        return $this->belongsToMany(Provider::class);
    }

    protected static function booted()
    {
        static::deleting(function ($package) {
            $package->users()->update(['package_id' => null]);
        });
    }
}
