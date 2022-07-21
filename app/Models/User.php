<?php

namespace App\Models;

use App\Casts\Encrypted;
use App\Mail\User\WelcomeEmail;
use Illuminate\Contracts\Translation\HasLocalePreference;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;
use Laragear\TwoFactor\Contracts\TwoFactorAuthenticatable;
use Laragear\TwoFactor\TwoFactorAuthentication;
use Laravel\Cashier\Billable;

class User extends Authenticatable implements HasLocalePreference, TwoFactorAuthenticatable
{
    use Billable, HasFactory, Notifiable, TwoFactorAuthentication;

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
        'zip',
        'notes',
        'language',
        'blocked',
        'theme',
        'keyboard_shortcuts',
        'requires_password_for_ftp',
        'package_id'
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
        'requires_password_for_ftp' => 'boolean',
        'trial_ends_at' => 'datetime',
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
        return $this
            ->morphedByMany(Server::class, 'service', 'user_service')
            ->using(UserService::class)->withTimestamps();
    }

    public function sites()
    {
        return $this
            ->morphedByMany(Site::class, 'service', 'user_service')
            ->using(UserService::class)->withTimestamps();
    }

    public function supportTickets()
    {
        return $this->hasMany(SupportTicket::class);
    }

    public function supportTicketReplies()
    {
        return $this->hasMany(SupportTicketReply::class);
    }

    public function systemLogs()
    {
        return $this->hasMany(SystemLog::class);
    }

    public function providers()
    {
        return $this->hasMany(UserProvider::class);
    }

    protected static function booted(): void
    {
        static::creating(function (self $user) {
            $user->user_name = strtolower(Str::random(10));
            $user->ftp_password = Str::random();

            if (!$user->language) {
                $user->language = setting('default_language', 'en');
            }

            if ($days = setting('trial')) {
                $user->trial_ends_at = now()->addDays($days);
            }
        });

        static::created(function (self $user) {
            // Usually I don't like using such conditions. However, otherwise when using Mail::fake(),
            // this would fake all emails going out leading to possible unexpected results as well.
            if (! app()->runningUnitTests()) {
                Mail::to($user)->send(new WelcomeEmail($user));
            }
        });

        static::deleting(function (self $user) {
            $user->systemLogs()->delete();
            $user->servers()->detach();
            $user->sites()->detach();
            foreach ($user->supportTickets as $supportTicket) {
                $supportTicket->replies()->delete();
            }
            $user->supportTickets()->delete();
        });
    }
}
