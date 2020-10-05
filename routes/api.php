<?php

use Illuminate\Support\Facades\Route;

Route::group(['middleware' => 'global.api.authenticated'], function () {
    Route::group(['prefix' => 'users'], function () {
        Route::get('/', 'UserController@index');
        Route::post('/', 'UserController@store');
        Route::get('{user}', 'UserController@show');
    });
});
