<?php

namespace App\Models;

use App\Traits\ModelHasSystemLogs;
use App\Traits\ModelHasServerAndSite;
use Illuminate\Database\Eloquent\Model;

class Redirect extends Model
{
    use ModelHasSystemLogs,
        ModelHasServerAndSite;

    const STATUS_BUSY = 'busy';
    const STATUS_ACTIVE = 'active';

    public $fillable = [
        'ploi_id',
        'redirect_from',
        'redirect_to',
        'type',
        'site_id',
        'server_id',
    ];
}
