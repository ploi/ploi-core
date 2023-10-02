<?php

namespace App\Models;

use App\Casts\PermissionCast;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Package extends Model
{
    use HasFactory;

    const CURRENCY_EURO = 'eur';
    const CURRENCY_USD = 'usd';
    const CURRENCY_NOK = 'nok';
    const CURRENCY_AUD = 'aud';
    const CURRENCY_CAD = 'cad';
    const CURRENCY_GBP = 'gbp';
    const CURRENCY_INR = 'inr';
    const CURRENCY_THB = 'thb';
    const CURRENCY_BRL = 'brl';
    const CURRENCY_NZD = 'nz';

    public $fillable = [
        'name',
        'stripe_plan_id', // This does not reflect an internal database relation, it reflects the plan ID from the PSP
        'currency',
        'price_hourly',
        'price_monthly',
        'price_yearly',
        'maximum_sites',
        'maximum_servers',
        'site_permissions',
        'server_permissions',
    ];

    public $casts = [
        'site_permissions' => PermissionCast::class,
        'server_permissions' => PermissionCast::class,
    ];

    public function users(): HasMany
    {
        return $this->hasMany(User::class);
    }

    public function providers(): BelongsToMany
    {
        return $this->belongsToMany(Provider::class)->using(PackageProvider::class);
    }

    public function providerPlans(): BelongsToMany
    {
        return $this->belongsToMany(ProviderPlan::class);
    }

    protected static function booted(): void
    {
        static::deleting(function (self $package) {
            $package->users()->update(['package_id' => null]);
        });
    }
}
