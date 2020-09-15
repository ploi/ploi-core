<?php

namespace App\Models;

use App\Traits\ModelHasSystemLogs;
use App\Traits\ModelHasServerAndSite;
use Illuminate\Database\Eloquent\Model;

class Cronjob extends Model
{
    use ModelHasSystemLogs,
        ModelHasServerAndSite;

    const STATUS_BUSY = 'busy';
    const STATUS_ACTIVE = 'active';

    public $perPage = 5;

    public $fillable = [
        'command',
        'frequency'
    ];
}
