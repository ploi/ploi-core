<?php

if (!function_exists('languages')) {
    function languages()
    {
        $languages = [
            'en'
        ];

        foreach (glob(base_path('resources/lang') . '/*.json') as $file) {
            $file = str_replace('.json', null, $file);
            $file = str_replace(base_path('resources/lang/'), null, $file);
            $languages[] = $file;
        }

        return $languages;
    }
}
