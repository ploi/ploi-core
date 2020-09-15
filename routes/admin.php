<?php

use Illuminate\Support\Facades\Route;

Route::get('/', 'DashboardController@index')->name('dashboard');

Route::get('settings', 'SettingController@index')->name('settings');
Route::patch('settings', 'SettingController@update')->name('settings.update');

Route::get('system', 'SystemController@index')->name('system');
Route::post('system/update', 'SystemController@update')->name('system.update');
Route::get('status', 'StatusController@index')->name('status.index');

Route::group(['prefix' => 'support', 'as' => 'support.'], function () {
    Route::get('/', 'SupportController@index')->name('index');
    Route::get('{ticket}', 'SupportController@show')->name('show');
    Route::post('{ticket}/reply', 'SupportController@reply')->name('reply');
    Route::post('{ticket}/close', 'SupportController@close')->name('close');
});

Route::group(['prefix' => 'documentation', 'as' => 'documentation.'], function () {
    Route::get('/', 'DocumentationController@index')->name('index');
});

Route::group(['prefix' => 'services', 'as' => 'services.'], function () {
    Route::get('/', 'ServiceController@index')->name('index');

    Route::group(['prefix' => 'servers', 'as' => 'servers.'], function () {
        Route::get('/', 'SynchronizeServerController@index')->name('index');
        Route::post('/', 'SynchronizeServerController@synchronizeServer')->name('sync');

        Route::get('{server}/edit', 'ServerController@edit')->name('edit');
        Route::post('{server}/attach', 'ServerController@attach')->name('attach');
        Route::patch('{server}', 'ServerController@update')->name('update');
        Route::delete('{server}', 'ServerController@destroy')->name('delete');
        Route::delete('{server}/detach/{user}', 'ServerController@detach')->name('detach');
    });

    Route::group(['prefix' => 'sites', 'as' => 'sites.'], function () {
        Route::get('/', 'SynchronizeSiteController@index')->name('index');

        Route::get('{site}/edit', 'SiteController@edit')->name('edit');
        Route::post('{site}/attach', 'SiteController@attach')->name('attach');
        Route::patch('{site}', 'SiteController@update')->name('update');
        Route::delete('{site}', 'SiteController@destroy')->name('delete');
        Route::delete('{site}/detach/{user}', 'SiteController@detach')->name('detach');
    });
});

Route::resource('packages', 'PackageController');
Route::resource('providers', 'ProviderController');
Route::resource('plans', 'ProviderPlanController');
Route::resource('regions', 'ProviderRegionController');
Route::resource('users', 'UserController');
