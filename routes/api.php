<?php

use App\Http\Controllers\Api\AppController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\SiteController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\ServerController;
use App\Http\Controllers\Api\PackageController;
use App\Http\Controllers\Api\RedirectController;
use App\Http\Controllers\Api\CertificateController;

Route::resource('users', UserController::class)
    ->names('user')
    ->only('index', 'store', 'show', 'update', 'destroy');

Route::resource('sites', SiteController::class)
    ->names('site')
    ->only('index', 'store', 'show', 'destroy');

Route::resource('servers', ServerController::class)
    ->names('server')
    ->only('index', 'store', 'show', 'destroy');

Route::resource('packages', PackageController::class)
    ->names('package')
    ->only('index');

Route::prefix('servers/{server}')->group(function () {
    Route::prefix('sites/{site}')->group(function () {
        Route::resource('redirects', RedirectController::class)
            ->names('redirect')
            ->only(['index', 'store', 'show', 'destroy']);

        Route::resource('apps', AppController::class)
            ->names('app')
            ->only('store', 'destroy');

        Route::resource('certificates', CertificateController::class)
            ->names('certificate')
            ->only('index', 'store', 'show', 'destroy');

    });
});

