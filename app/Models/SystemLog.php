<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SystemLog extends Model
{
    public $fillable = [
        'title',
        'description'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function model()
    {
        return $this->morphTo();
    }

    public function getKeyFromType()
    {
        if ($this->model instanceof Site) {
            return 'site';
        }

        if ($this->model instanceof Database) {
            return 'database';
        }

        if ($this->model instanceof Redirect) {
            return 'redirect';
        }

        if ($this->model instanceof Cronjob) {
            return 'cronjob';
        }

        return 'unknown';
    }

    public function getTitleDescription()
    {
        if ($this->getKeyFromType() === 'site') {
            return $this->model->domain;
        }

        if ($this->getKeyFromType() === 'database') {
            return $this->model->name;
        }

        if ($this->getKeyFromType() === 'redirect') {
            return $this->model->redirect_from . ' ' . __('to') . ' ' . $this->model->redirect_to;
        }

        if ($this->getKeyFromType() === 'cronjob') {
            return null;
        }

        return '-Unknown-';
    }
}
