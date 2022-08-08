<?php

namespace App\Models;

use App\Services\Ploi\Ploi;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Arr;
use stdClass;
use Sushi\Sushi;

class AvailableServer extends Model
{
    use Sushi;

    public function getRows(): array
    {
        $availableServers = Ploi::make()
            ->synchronize()
            ->servers()
            ->getData();

        return collect($availableServers)
            ->map(fn (stdClass $provider): array => Arr::only((array) $provider, ['id', 'name']))
            ->all();
    }
}
