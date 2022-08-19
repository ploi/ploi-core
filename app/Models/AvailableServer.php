<?php

namespace App\Models;

use stdClass;
use Sushi\Sushi;
use App\Services\Ploi\Ploi;
use Illuminate\Support\Arr;
use Illuminate\Database\Eloquent\Model;

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
            ->map(fn (stdClass $server): array => Arr::only((array) $server, ['id', 'name', 'ip_address', 'sites_count']))
            ->all();
    }
}
