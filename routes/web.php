<?php

use App\Http\Controllers\Auth\AuthenticateTwoFactorController;
use App\Http\Controllers\Auth\CreatePasswordController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\DocumentationController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\Profile\ProfileBillingController;
use App\Http\Controllers\Profile\ProfileController;
use App\Http\Controllers\Profile\ProfileIntegrationController;
use App\Http\Controllers\Profile\ProfileSecurityController;
use App\Http\Controllers\Profile\ProfileSettingController;
use App\Http\Controllers\Profile\TwoFactorAuthentication\ConfirmTwoFactorAuthenticationController;
use App\Http\Controllers\Profile\TwoFactorAuthentication\RegenerateRecoveryCodesController;
use App\Http\Controllers\Profile\TwoFactorAuthentication\TwoFactorAuthenticationController;
use App\Http\Controllers\SearchController;
use App\Http\Controllers\ServerController;
use App\Http\Controllers\ServerSettingController;
use App\Http\Controllers\SiteAliasController;
use App\Http\Controllers\SiteAppController;
use App\Http\Controllers\SiteCertificateController;
use App\Http\Controllers\SiteController;
use App\Http\Controllers\SiteCronjobController;
use App\Http\Controllers\SiteDatabaseController;
use App\Http\Controllers\SiteDnsController;
use App\Http\Controllers\SiteRedirectController;
use App\Http\Controllers\SiteSettingController;
use App\Http\Controllers\SupportController;
use Illuminate\Support\Facades\Route;

Auth::routes();

Route::get('password-creation', [CreatePasswordController::class, 'index'])->name('password-creation')
    ->middleware(['signed', 'guest']);
Route::post('password-creation', [CreatePasswordController::class, 'start'])->name('password-creation.start')
    ->middleware('guest');

Route::get('installation-incomplete', [PageController::class, 'installationIncomplete'])->name('installation-incomplete');

Route::get('page/{slug}', [PageController::class, 'show'])->name('page.show');

// All auth protected routes
Route::group(['middleware' => ['auth', 'auth.blocked']], function () {
    Route::get('confirm-2fa', [AuthenticateTwoFactorController::class, 'index'])->name('auth.confirm-2fa.index');
    Route::post('confirm-2fa', [AuthenticateTwoFactorController::class, 'confirm'])->name('auth.confirm-2fa.confirm');

    Route::middleware('auth.2fa')->group(function () {
        Route::get('/', [DashboardController::class, 'index'])->name('dashboard');
        Route::get('search', [SearchController::class, 'handle'])->name('search');

        // Site routes
        Route::group(['prefix' => 'sites', 'as' => 'sites.'], function () {
            Route::get('/', [SiteController::class, 'index'])->name('index');
            Route::get('{site}', [SiteController::class, 'show'])->name('show');
            Route::delete('{site}', [SiteController::class, 'destroy'])->name('delete');
            Route::post('/', [SiteController::class, 'store'])->name('store');
            Route::post('{site}/request-ftp-password', [SiteController::class, 'requestFtpPassword'])->name('request-ftp-password');

            Route::get('{site}/settings', [SiteSettingController::class, 'show'])->name('settings.show');
            Route::patch('{site}/settings', [SiteSettingController::class, 'update'])->name('settings.update');
            Route::patch('{site}/settings/php-version', [SiteSettingController::class, 'changePhpVersion'])->name('settings.php-version');

            // Site apps
            Route::group(['prefix' => '{site}/apps', 'as' => 'apps.'], function () {
                Route::get('/', [SiteAppController::class, 'index'])->name('index');
                Route::post('/', [SiteAppController::class, 'store'])->name('store');
                Route::delete('/', [SiteAppController::class, 'destroy'])->name('delete');
            });

            // Site databases
            Route::group(['prefix' => '{site}/databases', 'as' => 'databases.'], function () {
                Route::get('/', [SiteDatabaseController::class, 'index'])->name('index');
                Route::post('/', [SiteDatabaseController::class, 'store'])->name('store');
                Route::delete('{database}', [SiteDatabaseController::class, 'destroy'])->name('delete');
            });

            // Site cronjobs
            Route::group(['prefix' => '{site}/cronjobs', 'as' => 'cronjobs.'], function () {
                Route::get('/', [SiteCronjobController::class, 'index'])->name('index');
                Route::post('/', [SiteCronjobController::class, 'store'])->name('store');
                Route::delete('{cronjob}', [SiteCronjobController::class, 'destroy'])->name('delete');
            });

            // Site redirects
            Route::group(['prefix' => '{site}/redirects', 'as' => 'redirects.'], function () {
                Route::get('/', [SiteRedirectController::class, 'index'])->name('index');
                Route::post('/', [SiteRedirectController::class, 'store'])->name('store');
                Route::delete('{redirect}', [SiteRedirectController::class, 'destroy'])->name('delete');
            });

            // Site SSL
            Route::group(['prefix' => '{site}/certificates', 'as' => 'certificates.'], function () {
                Route::get('/', [SiteCertificateController::class, 'index'])->name('index');
                Route::post('/', [SiteCertificateController::class, 'store'])->name('store');
                Route::delete('{certificate}', [SiteCertificateController::class, 'destroy'])->name('delete');
            });

            // Site aliases
            Route::group(['prefix' => '{site}/aliases', 'as' => 'aliases.'], function () {
                Route::get('/', [SiteAliasController::class, 'index'])->name('index');
                Route::post('/', [SiteAliasController::class, 'store'])->name('store');
                Route::delete('{alias}', [SiteAliasController::class, 'destroy'])->name('delete');
            });

            // Site DNS
            Route::group(['prefix' => '{site}/dns', 'as' => 'dns.'], function () {
                Route::get('/', [SiteDnsController::class, 'index'])->name('index');
                Route::get('records', [SiteDnsController::class, 'records'])->name('records');
                Route::post('/', [SiteDnsController::class, 'store'])->name('store');
                Route::delete('{record}', [SiteDnsController::class, 'destroy'])->name('delete');
                Route::put('{record}', [SiteDnsController::class, 'update'])->name('update');
            });
        });

        // Server routes
        Route::group(['prefix' => 'servers', 'as' => 'servers.', 'middleware' => 'has.access:servers'], function () {
            Route::get('/', [ServerController::class, 'index'])->name('index');
            Route::get('{provider}/plans-and-regions', [ServerController::class, 'plansAndRegions'])->name('plans-and-regions');
            Route::get('{server}', [ServerController::class, 'show'])->name('show');
            Route::get('{server}/settings', [ServerController::class, 'show'])->name('settings.show');
            Route::patch('{server}/settings', [ServerController::class, 'update'])->name('settings.update');
            Route::post('/', [ServerController::class, 'store'])->name('store');

            Route::get('{server}/settings', [ServerSettingController::class, 'show'])->name('settings.show');

            Route::delete('{server}', [ServerController::class, 'destroy'])->name('delete');
        });

        // Profile routes
        Route::group(['prefix' => 'profile', 'as' => 'profile.', 'namespace' => 'Profile'], function () {
            Route::get('/', [ProfileController::class, 'index'])->name('index');
            Route::patch('/', [ProfileController::class, 'update'])->name('update');
            Route::delete('destroy', [ProfileController::class, 'destroy'])->name('delete-account');

            // Security
            Route::group(['prefix' => 'security', 'as' => 'security.'], function () {
                Route::get('/', [ProfileSecurityController::class, 'index'])->name('index');
                Route::patch('/password', [ProfileSecurityController::class, 'updatePassword'])->name('updatePassword');

                Route::group(['as' => 'two-factor-authentication.'], function () {
                    Route::put('2fa', [TwoFactorAuthenticationController::class, 'create'])->name('create');
                    Route::delete('2fa', [TwoFactorAuthenticationController::class, 'destroy'])->name('destroy');
                    Route::patch('2fa', ConfirmTwoFactorAuthenticationController::class)->name('confirm');
                    Route::patch('2fa/recovery-codes', RegenerateRecoveryCodesController::class)->name('regenerate-recovery-codes');
                });
            });

            // Settings
            Route::group(['prefix' => 'settings', 'as' => 'settings.'], function () {
                Route::get('/', [ProfileSettingController::class, 'index'])->name('index');
                Route::patch('/', [ProfileSettingController::class, 'update'])->name('update');
            });

            // Integrations
            Route::group(['prefix' => 'integrations', 'as' => 'integrations.'], function () {
                Route::get('/', [ProfileIntegrationController::class, 'index'])->name('index');
                Route::post('/', [ProfileIntegrationController::class, 'store'])->name('store');
                Route::delete('{provider}', [ProfileIntegrationController::class, 'destroy'])->name('destroy');
            });

            if (config('cashier.key') && config('cashier.secret')) {
                Route::group(['prefix' => 'billing', 'as' => 'billing.'], function () {
                    Route::get('/', [ProfileBillingController::class, 'index'])->name('index');

                    Route::post('card/update', [ProfileBillingController::class, 'updateCard'])->name('update.card');
                    Route::delete('card', [ProfileBillingController::class, 'deleteCard'])->name('delete.card');
                    Route::post('plan/update', [ProfileBillingController::class, 'updatePlan'])->name('update.plan');
                    Route::delete('plan/cancel', [ProfileBillingController::class, 'cancel'])->name('cancel.plan');
                    Route::get('invoices', [ProfileBillingController::class, 'invoices'])->name('invoices');
                    Route::get('invoices/{id}/pdf', [ProfileBillingController::class, 'pdf'])->name('invoices.pdf');
                });
            }

            Route::post('toggle-theme', [ProfileController::class, 'toggleTheme'])->name('toggle-theme');

            Route::post('request-ftp-password', [ProfileController::class, 'requestFtpPassword'])->name('request-ftp-password');
        });

        // Support routes
        if (setting('support')) {
            Route::group(['prefix' => 'support', 'as' => 'support.'], function () {
                Route::get('/', [SupportController::class, 'index'])->name('index');
                Route::get('create', [SupportController::class, 'create'])->name('create');
                Route::get('closed', [SupportController::class, 'indexClosed'])->name('index.closed');
                Route::post('/', [SupportController::class, 'store'])->name('store');
                Route::get('{support}', [SupportController::class, 'show'])->name('show');
                Route::post('{support}/reply', [SupportController::class, 'reply'])->name('reply');
                Route::post('{support}/close', [SupportController::class, 'close'])->name('close');
            });
        }

        if (setting('documentation')) {
            Route::group(['prefix' => 'documentation', 'as' => 'documentation.'], function () {
                Route::get('/', [DocumentationController::class, 'index'])->name('index');
                Route::get('{documentationCategory}', [DocumentationController::class, 'show'])->name('show');
                Route::get('{documentationCategory}/article/{documentationItem}', [DocumentationController::class, 'showArticle'])->name('article.show');
            });
        }
    });
});
