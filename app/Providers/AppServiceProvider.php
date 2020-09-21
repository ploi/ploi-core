<?php

namespace App\Providers;

use App\Models\Setting;
use Illuminate\Support\Collection;
use Illuminate\Pagination\UrlWindow;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\ServiceProvider;
use Illuminate\Pagination\LengthAwarePaginator;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton('settings', function ($app) {
            return $app['cache']->remember('core.settings', now()->addDay(), function () {
                try {
                    return Setting::pluck('value', 'key')->toArray();
                } catch (\Exception $exception) {
                    return [];
                }
            });
        });

        if (!$this->app->request->is('api*')) {
            $this->registerInertia();
            $this->registerLengthAwarePaginator();
        }
    }

    public function registerInertia()
    {
        inertia()->version(function () {
            return md5_file(public_path('mix-manifest.json'));
        });

        inertia()->share([
            'auth' => function () {
                return [
                    'user' => Auth::user() ? [
                        'id' => Auth::user()->id,
                        'name' => Auth::user()->name,
                        'email' => Auth::user()->email,
                        'role' => Auth::user()->role,
                        'user_name' => Auth::user()->user_name,
                        'avatar' => Auth::user()->getGravatar(),
                        'theme' => Auth::user()->theme,
                    ] : null,
                    'package' => auth()->user() && auth()->user()->package ? [
                        'maximum_sites' => auth()->user()->package->maximum_sites
                    ] : null,
                    'can' => auth()->user() && auth()->user()->package ? [
                        'server_creation' => auth()->user()->package->server_creation
                    ] : [],
                ];
            },

            'settings' => function () {
                return [
                    'demo' => config('app.demo'),
                    'name' => setting('name', 'Company'),
                    'support' => setting('support', false),
                    'documentation' => setting('documentation', false),
                    'logo' => setting('logo'),
                    'allow_registration' => setting('allow_registration'),
                ];
            },
            'flash' => function () {
                return [
                    'success' => Session::get('success'),
                    'error' => Session::get('error'),
                    'info' => Session::get('info'),
                ];
            },
            'errors' => function () {
                return Session::get('errors')
                    ? Session::get('errors')->getBag('default')->getMessages()
                    : (object)[];
            },
            'errors_count' => function () {
                return Session::get('errors')
                    ? count(Session::get('errors')->getBag('default')->getMessages())
                    : 0;
            },
        ]);
    }

    protected function registerLengthAwarePaginator()
    {
        $this->app->bind(LengthAwarePaginator::class, function ($app, $values) {
            return new class(...array_values($values)) extends LengthAwarePaginator {
                public function only(...$attributes)
                {
                    return $this->transform(function ($item) use ($attributes) {
                        return $item->only($attributes);
                    });
                }

                public function transform($callback)
                {
                    $this->items->transform($callback);

                    return $this;
                }

                public function toArray()
                {
                    return [
                        'data' => $this->items->toArray(),
                        'links' => $this->links(),
                        'per_page' => $this->perPage(),
                        'total' => $this->total(),
                    ];
                }

                public function links($view = null, $data = [])
                {
                    $this->appends(Request::all());

                    $window = UrlWindow::make($this);

                    $elements = array_filter([
                        $window['first'],
                        is_array($window['slider']) ? '...' : null,
                        $window['slider'],
                        is_array($window['last']) ? '...' : null,
                        $window['last'],
                    ]);

                    return Collection::make($elements)->flatMap(function ($item) {
                        if (is_array($item)) {
                            return Collection::make($item)->map(function ($url, $page) {
                                return [
                                    'url' => $url,
                                    'label' => $page,
                                    'active' => $this->currentPage() === $page,
                                ];
                            });
                        } else {
                            return [
                                [
                                    'url' => null,
                                    'label' => '...',
                                    'active' => false,
                                ],
                            ];
                        }
                    });
                }
            };
        });
    }
}
