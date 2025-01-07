<?php

namespace App\Models;

use Filament\Notifications\Notification;
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
        try {
            $availableServers = Ploi::make()
                ->synchronize()
                ->servers()
                ->getData();
        } catch (\Throwable $e) {
            Notification::make('wrong')
                ->title('Synchronize')
                ->body('Something went wrong when gathering the available servers: '. $e->getMessage())
                ->danger()
                ->send();

            return [];
        }

        return collect($availableServers)
            ->map(fn(stdClass $server): array => Arr::only((array)$server, ['id', 'name', 'ip_address', 'sites_count']))
            ->all();
    }
}
