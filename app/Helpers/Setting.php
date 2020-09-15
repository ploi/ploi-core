<?php

use Illuminate\Support\Arr;

if (!function_exists('setting')) {
    /**
     * @param null $key
     * @param null $default
     * @return array|ArrayAccess|bool|\Illuminate\Contracts\Foundation\Application|mixed
     */
    function setting($key = null, $default = null)
    {
        if (is_array($key)) {
            \App\Models\Setting::updateOrCreate([
                'key' => key($key)
            ], [
                'value' => Arr::first($key)
            ]);

            try {
                cache()->forget('core.settings');
            } catch (Exception $e) {
            }

            return true;
        }

        $value = Arr::get(app('settings'), $key, $default);

        // Boolean casting
        if ($value === "0" || $value === "1") {
            return (bool) $value;
        }

        return $value;
    }
}
