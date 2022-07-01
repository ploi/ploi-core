<?php

use App\Http\Controllers\Api\UserController;
use Illuminate\Support\Facades\Route;

Route::resource('users', UserController::class)
    ->names('user')
    ->only('index', 'store', 'show');
