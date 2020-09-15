<?php

namespace App\Models;

use App\Traits\ModelHasSystemLogs;
use App\Traits\ModelHasServerAndSite;
use Illuminate\Database\Eloquent\Model;

class Database extends Model
{
    use ModelHasSystemLogs,
        ModelHasServerAndSite;

    const STATUS_BUSY = 'busy';
    const STATUS_ACTIVE = 'active';

    public $perPage = 5;

    public $fillable = [
        'name'
    ];

    public function users()
    {
        return $this->hasMany(DatabaseUser::class);
    }

    public static function booted()
    {
        static::deleting(function (self $database) {
            $database->users()->delete();
        });
    }
}
