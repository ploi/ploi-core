<?php

namespace App\Models;

use App\Services\Ploi\Ploi;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Arr;
use stdClass;
use Sushi\Sushi;

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
