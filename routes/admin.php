<?php

use Illuminate\Support\Facades\Route;

Route::get('/', 'DashboardController@index')->name('dashboard');

Route::get('settings', 'SettingController@index')->name('settings');
Route::patch('settings', 'SettingController@update')->name('settings.update');

Route::get('system', 'SystemController@index')->name('system');
Route::post('system/update', 'SystemController@update')->name('system.update');
Route::get('status', 'StatusController@index')->name('status.index');

Route::get('application-logs', 'ApplicationLogController@index')->name('application-logs');

Route::group(['prefix' => 'support', 'as' => 'support.'], function () {
    Route::get('/', 'SupportController@index')->name('index');
    Route::get('{ticket}', 'SupportController@show')->name('show');
    Route::post('{ticket}/reply', 'SupportController@reply')->name('reply');
    Route::post('{ticket}/close', 'SupportController@close')->name('close');
});

Route::group(['prefix' => 'alerts', 'as' => 'alerts.'], function () {
    Route::get('/', 'AlertController@index')->name('index');
    Route::get('create', 'AlertController@create')->name('create');
    Route::post('/', 'AlertController@store')->name('store');
    Route::get('{alert}/edit', 'AlertController@edit')->name('edit');
    Route::patch('{alert}', 'AlertController@update')->name('update');
    Route::delete('{alert}', 'AlertController@destroy')->name('delete');
});

Route::group(['prefix' => 'documentation', 'as' => 'documentation.'], function () {
    Route::get('/', 'DocumentationController@index')->name('index');
    Route::get('create', 'DocumentationController@create')->name('create');
    Route::post('/', 'DocumentationController@store')->name('store');
    Route::get('{category}/edit', 'DocumentationController@edit')->name('edit');
    Route::patch('{category}', 'DocumentationController@update')->name('update');

    Route::group(['prefix' => 'articles', 'as' => 'articles.'], function () {
        Route::get('/', 'DocumentationArticleController@index')->name('index');
        Route::get('create', 'DocumentationArticleController@create')->name('create');
        Route::post('/', 'DocumentationArticleController@store')->name('store');
        Route::get('{article}/edit', 'DocumentationArticleController@edit')->name('edit');
        Route::patch('{article}', 'DocumentationArticleController@update')->name('update');
    });
});

Route::group(['prefix' => 'services', 'as' => 'services.'], function () {
    Route::get('/', 'ServiceController@index')->name('index');

    // Server syncing
    Route::group(['prefix' => 'servers', 'as' => 'servers.'], function () {
        Route::get('/', 'SynchronizeServerController@index')->name('index');
        Route::post('/', 'SynchronizeServerController@synchronizeServer')->name('sync');

        Route::get('{server}/edit', 'ServerController@edit')->name('edit');
        Route::post('{server}/attach', 'ServerController@attach')->name('attach');
        Route::patch('{server}', 'ServerController@update')->name('update');
        Route::delete('{server}', 'ServerController@destroy')->name('delete');
        Route::delete('{server}/detach/{user}', 'ServerController@detach')->name('detach');
    });

    // Provider syncing
    Route::group(['prefix' => 'providers', 'as' => 'providers.'], function () {
        Route::get('/', 'SynchronizeProviderController@index')->name('index');
        Route::post('{provider}', 'SynchronizeProviderController@synchronize')->name('sync');

        Route::get('{provider}/edit', 'ProviderController@edit')->name('edit');
        Route::patch('{provider}', 'ProviderController@update')->name('update');
        Route::delete('{provider}', 'ProviderController@destroy')->name('delete');
    });

    // Site syncing
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
