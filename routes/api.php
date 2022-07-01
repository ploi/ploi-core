<?php

use App\Http\Controllers\Api\SiteController;
use App\Http\Controllers\Api\UserController;
use Illuminate\Support\Facades\Route;

Route::resource('users', UserController::class)
    ->names('user')
    ->only('index', 'store', 'show');

Route::resource('sites', SiteController::class)
    ->names('site')
    ->only('index', 'store', 'show');
