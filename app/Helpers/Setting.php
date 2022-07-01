<?php

use App\Models\Setting;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Support\Arr;

if (!function_exists('setting')) {
    /**
     * @param null $key
     * @param null $default
     * @return array|ArrayAccess|bool|Application|mixed
     */
    function setting($key = null, $default = null)
    {
        if (is_array($key)) {
            Setting::updateOrCreate([
                'key' => key($key)
            ], [
                'value' => Arr::first($key)
            ]);

            try {
                cache()->forget('core.settings');
            } catch (Exception $e) {
                //
            }

            return true;
        }

        $value = Arr::get(app('settings'), $key, $default);

        // Boolean casting
        if ($value === "0" || $value === "1" && $key !== 'trial_package') {
            return (bool) $value;
        }

        return $value;
    }
}
