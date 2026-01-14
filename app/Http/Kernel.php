<?php

namespace App\Http;

use App\Http\Middleware\TrustProxies;
use Illuminate\Http\Middleware\HandleCors;
use App\Http\Middleware\PreventRequestsDuringMaintenance;
use Illuminate\Foundation\Http\Middleware\ValidatePostSize;
use App\Http\Middleware\TrimStrings;
use Illuminate\Foundation\Http\Middleware\ConvertEmptyStringsToNull;
use Inertia\Middleware;
use App\Http\Middleware\Demo;
use App\Http\Middleware\EncryptCookies;
use Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse;
use Illuminate\Session\Middleware\StartSession;
use Illuminate\View\Middleware\ShareErrorsFromSession;
use App\Http\Middleware\VerifyCsrfToken;
use Illuminate\Routing\Middleware\SubstituteBindings;
use App\Http\Middleware\SetLocale;
use App\Http\Middleware\InstallationComplete;
use App\Http\Middleware\HandleInertiaRequests;
use App\Http\Middleware\Authenticate;
use Illuminate\Auth\Middleware\AuthenticateWithBasicAuth;
use App\Http\Middleware\UserBlocked;
use App\Http\Middleware\EnforceTwoFactorAuthenticationIfEnabled;
use Illuminate\Http\Middleware\SetCacheHeaders;
use Illuminate\Auth\Middleware\Authorize;
use App\Http\Middleware\HasAccessToThisGroup;
use App\Http\Middleware\RedirectIfAuthenticated;
use App\Http\Middleware\GlobalApiAuthenticated;
use Illuminate\Auth\Middleware\RequirePassword;
use App\Http\Middleware\RoleMiddleware;
use Illuminate\Routing\Middleware\ValidateSignature;
use Illuminate\Routing\Middleware\ThrottleRequests;
use Illuminate\Auth\Middleware\EnsureEmailIsVerified;
use Illuminate\Foundation\Http\Kernel as HttpKernel;

class Kernel extends HttpKernel
{
    /**
     * The application's global HTTP middleware stack.
     *
     * These middleware are run during every request to your application.
     *
     * @var array
     */
    protected $middleware = [
        // \App\Http\Middleware\TrustHosts::class,
        TrustProxies::class,
        HandleCors::class,
        PreventRequestsDuringMaintenance::class,
        ValidatePostSize::class,
        TrimStrings::class,
        ConvertEmptyStringsToNull::class,
    ];

    protected $middlewarePriority = [
        Middleware::class,
        Demo::class,
    ];

    /**
     * The application's route middleware groups.
     *
     * @var array
     */
    protected $middlewareGroups = [
        'web' => [
            EncryptCookies::class,
            AddQueuedCookiesToResponse::class,
            StartSession::class,
            // \Illuminate\Session\Middleware\AuthenticateSession::class,
            ShareErrorsFromSession::class,
            VerifyCsrfToken::class,
            SubstituteBindings::class,
            SetLocale::class,
            Demo::class,
            InstallationComplete::class,
            HandleInertiaRequests::class,
        ],

        'api' => [
            'throttle:60,1',
            SubstituteBindings::class,
        ],
    ];

    /**
     * The application's route middleware.
     *
     * These middleware may be assigned to groups or used individually.
     *
     * @var array
     */
    protected $routeMiddleware = [
        'auth' => Authenticate::class,
        'auth.basic' => AuthenticateWithBasicAuth::class,
        'auth.blocked' => UserBlocked::class,
        'auth.2fa' => EnforceTwoFactorAuthenticationIfEnabled::class,
        'bindings' => SubstituteBindings::class,
        'cache.headers' => SetCacheHeaders::class,
        'can' => Authorize::class,
        'has.access' => HasAccessToThisGroup::class,
        'guest' => RedirectIfAuthenticated::class,
        'global.api.authenticated' => GlobalApiAuthenticated::class,
        'password.confirm' => RequirePassword::class,
        'role' => RoleMiddleware::class,
        'signed' => ValidateSignature::class,
        'throttle' => ThrottleRequests::class,
        'verified' => EnsureEmailIsVerified::class,
    ];
}
