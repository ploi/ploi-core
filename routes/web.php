<?php

use Illuminate\Support\Facades\Route;

Auth::routes();

Route::get('password-creation', 'Auth\CreatePasswordController@index')->name('password-creation')
    ->middleware(['signed', 'guest']);
Route::post('password-creation', 'Auth\CreatePasswordController@start')->name('password-creation.start')
    ->middleware('guest');

Route::get('installation-incomplete', 'PageController@installationIncomplete')->name('installation-incomplete');

// All auth protected routes
Route::group(['middleware' => ['auth', 'auth.blocked']], function () {
    Route::get('/', 'DashboardController@index')->name('dashboard');
    Route::get('search', 'SearchController@handle')->name('search');

    // Site routes
    Route::group(['prefix' => 'sites', 'as' => 'sites.'], function () {
        Route::get('/', 'SiteController@index')->name('index');
        Route::get('{site}', 'SiteController@show')->name('show');
        Route::delete('{site}', 'SiteController@destroy')->name('delete');
        Route::post('/', 'SiteController@store')->name('store');
        Route::post('{site}/request-ftp-password', 'SiteController@requestFtpPassword')->name('request-ftp-password');

        Route::get('{site}/settings', 'SiteSettingController@show')->name('settings.show');
        Route::patch('{site}/settings', 'SiteSettingController@update')->name('settings.update');
        Route::patch('{site}/settings/php-version', 'SiteSettingController@changePhpVersion')->name('settings.php-version');

        // Site apps
        Route::group(['prefix' => '{site}/apps', 'as' => 'apps.'], function () {
            Route::get('/', 'SiteAppController@index')->name('index');
            Route::post('/', 'SiteAppController@store')->name('store');
            Route::delete('/', 'SiteAppController@destroy')->name('delete');
        });

        // Site databases
        Route::group(['prefix' => '{site}/databases', 'as' => 'databases.'], function () {
            Route::get('/', 'SiteDatabaseController@index')->name('index');
            Route::post('/', 'SiteDatabaseController@store')->name('store');
            Route::delete('{database}', 'SiteDatabaseController@destroy')->name('delete');
        });

        // Site cronjobs
        Route::group(['prefix' => '{site}/cronjobs', 'as' => 'cronjobs.'], function () {
            Route::get('/', 'SiteCronjobController@index')->name('index');
            Route::post('/', 'SiteCronjobController@store')->name('store');
            Route::delete('{cronjob}', 'SiteCronjobController@destroy')->name('delete');
        });

        // Site redirects
        Route::group(['prefix' => '{site}/redirects', 'as' => 'redirects.'], function () {
            Route::get('/', 'SiteRedirectController@index')->name('index');
            Route::post('/', 'SiteRedirectController@store')->name('store');
            Route::delete('{redirect}', 'SiteRedirectController@destroy')->name('delete');
        });

        // Site SSL
        Route::group(['prefix' => '{site}/certificates', 'as' => 'certificates.'], function () {
            Route::get('/', 'SiteCertificateController@index')->name('index');
            Route::post('/', 'SiteCertificateController@store')->name('store');
            Route::delete('{certificate}', 'SiteCertificateController@destroy')->name('delete');
        });

        // Site DNS
        Route::group(['prefix' => '{site}/dns', 'as' => 'dns.'], function () {
            Route::get('/', 'SiteDnsController@index')->name('index');
            Route::get('records', 'SiteDnsController@records')->name('records');
            Route::post('/', 'SiteDnsController@store')->name('store');
            Route::delete('{record}', 'SiteDnsController@destroy')->name('delete');
        });
    });

    // Server routes
    Route::group(['prefix' => 'servers', 'as' => 'servers.'], function () {
        Route::get('/', 'ServerController@index')->name('index');
        Route::get('{provider}/plans-and-regions', 'ServerController@plansAndRegions')->name('plans-and-regions');
        Route::get('{server}', 'ServerController@show')->name('show');
        Route::get('{server}/settings', 'ServerController@show')->name('settings.show');
        Route::patch('{server}/settings', 'ServerController@update')->name('settings.update');
        Route::post('/', 'ServerController@store')->name('store');

        Route::get('{server}/settings', 'ServerSettingController@show')->name('settings.show');

        Route::delete('{server}', 'ServerController@destroy')->name('delete');
    });

    // Profile routes
    Route::group(['prefix' => 'profile', 'as' => 'profile.', 'namespace' => 'Profile'], function () {
        Route::get('/', 'ProfileController@index')->name('index');
        Route::patch('/', 'ProfileController@update')->name('update');

        // Security
        Route::group(['prefix' => 'security', 'as' => 'security.'], function () {
            Route::get('password', 'ProfilePasswordController@index')->name('index');
            Route::patch('password', 'ProfilePasswordController@update')->name('update');
        });

        // Settings
        Route::group(['prefix' => 'settings', 'as' => 'settings.'], function () {
            Route::get('/', 'ProfileSettingController@index')->name('index');
            Route::patch('/', 'ProfileSettingController@update')->name('update');
        });

        // Integrations
        Route::group(['prefix' => 'integrations', 'as' => 'integrations.'], function () {
            Route::get('/', 'ProfileIntegrationController@index')->name('index');
            Route::post('/', 'ProfileIntegrationController@store')->name('store');
            Route::delete('{provider}', 'ProfileIntegrationController@destroy')->name('destroy');
        });

        if (config('cashier.key') && config('cashier.secret')) {
            Route::group(['prefix' => 'billing', 'as' => 'billing.'], function () {
                Route::get('/', 'ProfileBillingController@index')->name('index');

                Route::post('card/update', 'ProfileBillingController@updateCard')->name('update.card');
                Route::post('plan/update', 'ProfileBillingController@updatePlan')->name('update.plan');
                Route::delete('plan/cancel', 'ProfileBillingController@cancel')->name('cancel.plan');
                Route::get('invoices', 'ProfileBillingController@invoices')->name('invoices');
                Route::get('invoices/{id}/pdf', 'ProfileBillingController@pdf')->name('invoices.pdf');
            });
        }

        Route::post('toggle-theme', 'ProfileController@toggleTheme')->name('toggle-theme');

        Route::post('request-ftp-password', 'ProfileController@requestFtpPassword')->name('request-ftp-password');
    });

    // Support routes
    if (setting('support')) {
        Route::group(['prefix' => 'support', 'as' => 'support.'], function () {
            Route::get('/', 'SupportController@index')->name('index');
            Route::get('create', 'SupportController@create')->name('create');
            Route::get('closed', 'SupportController@indexClosed')->name('index.closed');
            Route::post('/', 'SupportController@store')->name('store');
            Route::get('{support}', 'SupportController@show')->name('show');
            Route::post('{support}/reply', 'SupportController@reply')->name('reply');
            Route::post('{support}/close', 'SupportController@close')->name('close');
        });
    }

    if (setting('documentation')) {
        Route::group(['prefix' => 'documentation', 'as' => 'documentation.'], function () {
            Route::get('/', 'DocumentationController@index')->name('index');
            Route::get('{documentationItem}', 'DocumentationController@show')->name('show');
        });
    }
});
