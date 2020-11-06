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

    public function systemUsers()
    {
        return $this->belongsToMany(SiteSystemUser::class, 'site_system_user_attached');
    }

    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('Y-m-d H:i:s');
    }

    public function isActive()
    {
        return $this->status === self::STATUS_ACTIVE;
    }

    public function getSystemUser($withPassword = true)
    {
        if (setting('isolate_per_site_per_user') && $this->systemUsers()->first()) {
            $user = $this->systemUsers()->first();
        } else {
            $user = $this->users()->first();
        }

        return [
                'user_name' => $user->user_name,
            ] + ($withPassword ? ['ftp_password' => $user->ftp_password] : []);
    }

    public static function booted()
    {
        static::created(function (self $site) {
            $site->systemUsers()->create();
        });

        static::deleting(function (self $site) {
            foreach ($site->databases as $database) {
                $database->delete();
            }

            $ids = $site->systemUsers->pluck('id');
            // Detach all db users
            $site->systemUsers()->detach();

            // Loop through ids an remove old users.
            foreach ($ids as $id) {
                $record = SiteSystemUser::find($id);
                if ($record) {
                    $record->delete();
                }
            }

            $site->redirects()->delete();
            $site->cronjobs()->delete();
            $site->certificates()->delete();
            $site->logs()->delete();
            $site->users()->detach();
        });
    }
}
