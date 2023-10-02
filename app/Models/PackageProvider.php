<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\Pivot;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PackageProvider extends Pivot
{
    protected static function booted(): void
    {
        static::deleting(function (self $packageProvider) {
            $packageProvider->package->providerPlans()->whereBelongsTo($packageProvider->provider)->detach();
        });
    }

    public function package(): BelongsTo
    {
        return $this->belongsTo(Package::class);
    }

    public function provider(): BelongsTo
    {
        return $this->belongsTo(Provider::class);
    }
}
