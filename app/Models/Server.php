<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Server extends Model
{
    const STATUS_BUSY = 'busy';
    const STATUS_ACTIVE = 'active';

    public $fillable = [
        'ploi_id',
        'status',
        'name',
        'ip',
        'internal_ip',
        'ssh_port',
        'maximum_sites',
        'available_php_versions'
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
        return $this->morphToMany(User::class, 'service', 'user_service')
            ->using(UserService::class)
            ->withTimestamps();
    }

    public function logs()
    {
        return $this->morphMany(SystemLog::class, 'model');
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
