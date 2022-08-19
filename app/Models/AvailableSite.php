<?php

namespace App\Models;

use stdClass;
use Sushi\Sushi;
use App\Services\Ploi\Ploi;
use Illuminate\Support\Arr;
use Illuminate\Database\Eloquent\Model;

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
