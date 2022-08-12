<?php

use App\Http\Controllers\Api\PackageController;
use App\Http\Controllers\Api\ServerController;
use App\Http\Controllers\Api\SiteController;
use App\Http\Controllers\Api\UserController;
use Illuminate\Support\Facades\Route;

Route::resource('users', UserController::class)
    ->names('user')
    ->only('index', 'store', 'show', 'update', 'destroy');

Route::resource('sites', SiteController::class)
    ->names('site')
    ->only('index', 'store', 'show');

Route::resource('servers', ServerController::class)
    ->names('server')
    ->only('store');

Route::resource('packages', PackageController::class)
    ->names('package')
    ->only('index');
