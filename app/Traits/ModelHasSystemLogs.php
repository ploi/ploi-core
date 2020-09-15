<?php

namespace App\Traits;

use App\Models\SystemLog;

trait ModelHasSystemLogs
{
    public function logs()
    {
        return $this->morphMany(SystemLog::class, 'model');
    }

    public static function bootModelHasSystemLogs()
    {
        static::deleting(function ($model) {
            $model->logs()->delete();
        });
    }
}
