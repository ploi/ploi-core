<?php

namespace App\Models;

use DateTimeInterface;
use App\Casts\SiteAlias;
use Illuminate\Support\Str;
use App\Jobs\Cronjobs\DeleteCronjob;
use App\Jobs\Databases\DeleteDatabase;
use App\Jobs\Redirects\DeleteRedirect;
use Illuminate\Database\Eloquent\Model;
use App\Jobs\Certificates\DeleteCertificate;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasOneThrough;

class Site extends Model
{
    use HasFactory;

    const STATUS_BUSY = 'busy';
    const STATUS_ACTIVE = 'active';

    const PROJECT_WORDPRESS = 'wordpress';
    const PROJECT_NEXTCLOUD = 'nextcloud';
    const PROJECT_OCTOBERCMS = 'october-cms';

    public $fillable = [
        'ploi_id',
        'domain',
        'dns_id',
        'project',
        'aliases',
        'php_version'
    ];

    public $casts = [
        'aliases' => SiteAlias::class,
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

    public function user(): HasOneThrough
    {
        return $this->hasOneThrough(User::class, UserService::class, 'service_id', 'id', 'id', 'user_id');
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

    public function addAlias($alias)
    {
        $aliases = $this->aliases;

        $aliases[] = $alias;

        $this->aliases = $aliases;
        $this->save();
    }

    public function removeAlias($alias)
    {
        $this->aliases = array_diff($this->aliases, [$alias]);
        $this->save();
    }

    public static function booted()
    {
        static::creating(function (self $site) {
            $site->domain = strtolower($site->domain);
        });

        static::created(function (self $site) {
            $site->systemUsers()->create([
                'user_name' => Str::of($site->domain)->remove(['.', '-'])->limit(8, '')->lower()->append('-' . $site->id),
            ]);
        });

        static::deleting(function (self $site) {
            $site
                ->databases()
                ->get()
                ->each(function (Database $database) {
                    if ($server = $database->server) {
                        dispatch(new DeleteDatabase($server->ploi_id, $database->ploi_id));
                    }

                    $database->delete();
                });

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

            // MOETEN HIER OOK JOBS VOOR WORDEN GEDISPATCHET?
            $site
                ->redirects()
                ->get()
                ->each(function (Redirect $redirect) {
                    dispatch(new DeleteRedirect($redirect->server->ploi_id, $redirect->site->ploi_id, $redirect->ploi_id));

                    $redirect->delete();
                });

            $site
                ->cronjobs()
                ->get()
                ->each(function (Cronjob $cronJob) {
                    dispatch(new DeleteCronjob($cronJob->server->ploi_id, $cronJob->ploi_id));

                    $cronJob->delete();
                });

            $site
                ->certificates()
                ->get()
                ->each(function (Certificate $certificate) {
                    dispatch(new DeleteCertificate($certificate->server->ploi_id, $certificate->site->ploi_id, $certificate->ploi_id));

                    $certificate->delete();
                });

            $site->logs()->delete();

            $site->users()->detach();
        });
    }
}
