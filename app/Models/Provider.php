<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Provider extends Model
{
    protected $guarded = [];

    public function plans()
    {
        return $this->hasMany(ProviderPlan::class);
    }

    public function regions()
    {
        return $this->hasMany(ProviderRegion::class);
    }
}
