<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Provider extends Model
{
    protected $guarded = [];

    public function getNameWithLabelAttribute()
    {
        $string = $this->name;

        if ($this->label) {
            $string .= ' (' . $this->label . ')';
        }

        return $string;
    }

    public function plans()
    {
        return $this->hasMany(ProviderPlan::class);
    }

    public function regions()
    {
        return $this->hasMany(ProviderRegion::class);
    }

    public function packages()
    {
        return $this->belongsToMany(Package::class);
    }

    public function servers()
    {
        return $this->hasMany(Server::class);
    }

    public static function booted()
    {
        static::deleting(function(self $provider){
            $provider->regions()->delete();
            $provider->plans()->delete();
            $provider->packages()->detach();

            foreach($provider->servers as $server){
                $server->provider_id = null;
                $server->provider_plan_id = null;
                $server->provider_region_id = null;
                $server->save();
            }
        });
    }
}
