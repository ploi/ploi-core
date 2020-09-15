<?php

namespace App\Http\Middleware;

use Closure;
use Carbon\Carbon;

class SetLocale
{
    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure $next
     *
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if ($user = $request->user()) {
            app()->setLocale($user->language);

            Carbon::setLocale($user->language);
        }

        inertia()->share([
            'translations' => $this->getTranslations()
        ]);

        return $next($request);
    }

    /**
     * Get the translation keys from file.
     *
     * @return array
     */
    private static function getTranslations()
    {
        // Less cache hits if its english, this is default language
        if (app()->getLocale() == 'en') {
            return [];
        }

        $resolver = function () {
            $translationFile = resource_path('lang/' . app()->getLocale() . '.json');

            if (!is_readable($translationFile)) {
                return [];
            }

            return json_decode(file_get_contents($translationFile), true);
        };

        if (app()->isLocal()) {
            return $resolver();
        }

        return \Cache::remember('translations-' . app()->getLocale(), now()->addDay(), $resolver);
    }
}
