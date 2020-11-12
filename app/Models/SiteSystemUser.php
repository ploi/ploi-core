<?php

namespace App\Models;

use App\Casts\Encrypted;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;

class SiteSystemUser extends Model
{
    public $fillable = [
        'user_name',
        'ftp_password'
    ];

    protected $casts = [
        'ftp_password' => Encrypted::class,
    ];

    public function site()
    {
        return $this->belongsToMany(Site::class, 'site_system_user_attached');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    protected static function booted()
    {
        static::creating(function (self $siteSystemUser) {
            $siteSystemUser->user_name = strtolower(Str::random(10));
            $siteSystemUser->ftp_password = Str::random();
        });
    }
}
