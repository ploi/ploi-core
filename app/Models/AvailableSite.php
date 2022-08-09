<?php

namespace App\Models;

use App\Services\Ploi\Ploi;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Arr;
use stdClass;
use Sushi\Sushi;

class AvailableSite extends Model
{
    use Sushi;

    public function getRows(): array
    {
        $availableSites = Ploi::make()
            ->synchronize()
            ->sites()
            ->getData();

        return collect($availableSites)
            ->map(fn (stdClass $site): array => Arr::only((array) $site, ['id', 'domain', 'server_id', 'system_user', 'status']))
            ->all();
    }
}
