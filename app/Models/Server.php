<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasOneThrough;

class Server extends Model
{
    use HasFactory;

    const STATUS_BUSY = 'busy';
    const STATUS_ACTIVE = 'active';

    const OS_UBUNTU_18 = 'ubuntu-18-04-lts';
    const OS_UBUNTU_20 = 'ubuntu-20-04-lts';
    const OS_UBUNTU_22 = 'ubuntu-22-04-lts';

    public $fillable = [
        'ploi_id',
        'status',
        'name',
        'ip',
        'os',
        'internal_ip',
        'ssh_port',
        'maximum_sites',
        'available_php_versions',
        'database_type',
        'phpmyadmin_link'
    ];

    protected $casts = [
        'available_php_versions' => 'array'
    ];

    public function sites()
    {
        return $this->hasMany(Site::class);
    }

    public function users()
    {
        return $this
            ->morphToMany(User::class, 'service', 'user_service')
            ->using(UserService::class)
            ->withTimestamps();
    }

    public function user(): HasOneThrough
    {
        return $this->hasOneThrough(User::class, UserService::class, 'service_id', 'id', 'id', 'user_id');
    }

    public function logs()
    {
        return $this->morphMany(SystemLog::class, 'model');
    }

    public function provider()
    {
        return $this->belongsTo(Provider::class);
    }

    public function providerRegion()
    {
        return $this->belongsTo(ProviderRegion::class);
    }

    public function providerPlan()
    {
        return $this->belongsTo(ProviderPlan::class);
    }

    public static function booted()
    {
        static::deleting(function (self $server) {
            foreach ($server->sites as $site) {
                $site->delete();
            }

            $server->logs()->delete();
        });
    }
}
