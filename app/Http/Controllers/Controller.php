<?php

namespace App\Http\Controllers;

use App\Services\Ploi\Ploi;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class Controller extends BaseController
{
    use ValidatesRequests, AuthorizesRequests;

    protected function isDemo()
    {
        return config('app.demo');
    }

    protected function getPloi()
    {
        return new Ploi(config('services.ploi.token'));
    }
}
