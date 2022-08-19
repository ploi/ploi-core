<?php

namespace App\Models;

use stdClass;
use Sushi\Sushi;
use App\Services\Ploi\Ploi;
use Illuminate\Support\Arr;
use Illuminate\Database\Eloquent\Model;

class AvailableProvider extends Model
{
    use Sushi;

    public function getRows(): array
    {
        $availableProviders = Ploi::make()
            ->user()
            ->serverProviders()
            ->getData();

        $currentProviders = Provider::pluck('ploi_id');

        return collect($availableProviders)
            ->map(fn (stdClass $provider): array => Arr::only((array) $provider, ['id', 'label', 'name']))
            ->filter(fn (array $provider): bool => $currentProviders->doesntContain($provider['id']))
            ->all();
    }
}
