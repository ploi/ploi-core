<?php

namespace App\Casts;

use Illuminate\Contracts\Database\Eloquent\CastsAttributes;

class SiteAlias implements CastsAttributes
{
    public function get($model, string $key, $value, array $attributes)
    {
        if (!$value) {
            return [];
        }

        $data = json_decode($value, true);

        sort($data);

        return $data;
    }

    public function set($model, string $key, $value, array $attributes)
    {
        return json_encode($value);
    }
}
