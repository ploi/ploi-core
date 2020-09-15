<?php

namespace App\Models;

use DateTimeInterface;
use Illuminate\Database\Eloquent\Model;

class Site extends Model
{
    const STATUS_BUSY = 'busy';
    const STATUS_ACTIVE = 'active';

    const PROJECT_WORDPRESS = 'wordpress';
    const PROJECT_NEXTCLOUD = 'nextcloud';
    const PROJECT_OCTOBERCMS = 'october-cms';

    public $fillable = [
        'domain',
        'dns_id'
    ];

    public function setDnsIdAttribute($value)
    {
        if (!$value) {
            return;
        }

        $this->attributes['dns_id'] = encrypt($value);
    }

    public function server()
    {
        return $this->belongsTo(Server::class);
    }

    public function databases()
    {
        return $this->hasMany(Database::class);
    }

    public function cronjobs()
    {
        return $this->hasMany(Cronjob::class);
    }

    public function redirects()
    {
        return $this->hasMany(Redirect::class);
    }

    public function certificates()
    {
        return $this->hasMany(Certificate::class);
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

    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('Y-m-d H:i:s');
    }

    public function isActive()
    {
        return $this->status === self::STATUS_ACTIVE;
    }

    public static function booted()
    {
        static::deleting(function (self $site) {
            foreach ($site->databases as $database) {
                $database->delete();
            }
            $site->redirects()->delete();
            $site->cronjobs()->delete();
            $site->certificates()->delete();
            $site->logs()->delete();
            $site->users()->detach();
        });
    }
}
