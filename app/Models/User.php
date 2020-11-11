<?php

namespace App\Models;

use App\Casts\Encrypted;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;
use Laravel\Cashier\Billable;
use App\Mail\User\WelcomeEmail;
use Illuminate\Support\Facades\Mail;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Contracts\Translation\HasLocalePreference;

class User extends Authenticatable implements HasLocalePreference
{
    use Billable, Notifiable;

    const ADMIN = 'admin';
    const RESELLER = 'reseller';
    const USER = 'user';

    protected $fillable = [
        'name',
        'email',
        'password',
        'company',
        'address',
        'city',
        'country',
        'notes',
        'language',
        'blocked',
        'theme',
        'keyboard_shortcuts',
        'requires_password_for_ftp'
    ];

    protected $hidden = [
        'password',
        'ftp_password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
        'ftp_password' => Encrypted::class,
        'keyboard_shortcuts' => 'boolean',
        'requires_password_for_ftp' => 'boolean'
    ];

    protected $appends = [
        'avatar'
    ];

    public function setPasswordAttribute($value)
    {
        if (!$value) {
            $this->attributes['password'] = null;
        } else {
            $this->attributes['password'] = bcrypt($value);
        }
    }

    public function getAvatarAttribute()
    {
        return $this->getGravatar();
    }

    public function preferredLocale()
    {
        return $this->language;
    }

    public function getGravatar($size = 150)
    {
        return 'https://www.gravatar.com/avatar/' . md5(strtolower(trim(Arr::get($this->attributes, 'email')))) . '?s=' . (int)$size;
    }

    public function isAdmin()
    {
        return $this->role === User::ADMIN;
    }

    public function isUserBlocked()
    {
        return $this->blocked ? true : false;
    }

    public function package()
    {
        return $this->belongsTo(Package::class);
    }

    public function servers()
    {
        return $this->morphedByMany(Server::class, 'service', 'user_service')
            ->using(UserService::class)->withTimestamps();
    }

    public function sites()
    {
        return $this->morphedByMany(Site::class, 'service', 'user_service')
            ->using(UserService::class)->withTimestamps();
    }

    public function supportTickets()
    {
        return $this->hasMany(SupportTicket::class);
    }

    public function systemLogs()
    {
        return $this->hasMany(SystemLog::class);
    }

    public function providers()
    {
        return $this->hasMany(UserProvider::class);
    }

    protected static function booted()
    {
        static::creating(function (self $user) {
            $user->user_name = strtolower(Str::random(10));
            $user->ftp_password = Str::random();

            if (!$user->language) {
                $user->language = setting('default_language', 'en');
            }
        });

        static::created(function (self $user) {
            Mail::to($user)->send(new WelcomeEmail($user));
        });

        static::deleting(function (self $user) {
            $user->systemLogs()->delete();
            $user->servers()->detach();
            $user->sites()->detach();
        });
    }
}
