<?php

namespace App\Filament\Resources\SiteResource\Pages;

use App\Filament\Resources\SiteResource;
use App\Models\Server;
use App\Models\Site;
use App\Traits\HasPloi;
use Filament\Notifications\Notification;
use Filament\Pages\Actions\Action;
use Filament\Resources\Pages\ListRecords;
use Illuminate\Database\Eloquent\Builder;

class ListSites extends ListRecords
{
    use HasPloi;

    protected static string $resource = SiteResource::class;

    protected function getActions(): array
    {
        return [
            Action::make('synchronize_sites')
                ->label(__('Synchronize sites'))
                ->icon('heroicon-o-refresh')
                ->action(function () {
                    $availableSites = $this->getPloi()->synchronize()->sites()->getData();

                    foreach ($availableSites as $availableSite) {
                        $server = Server::query()->where('ploi_id', $availableSite->server_id)->firstOrFail();

                        $site = Site::query()
                            ->updateOrCreate([
                                'ploi_id' => $availableSite->id,
                            ], [
                                'domain' => $availableSite->domain,
                                'php_version' => $availableSite->php_version,
                            ]);

                        $site->status = $availableSite->status;
                        $site->server_id = $server->id;
                        $site->save();
                    }

                    Notification::make()
                        ->body(__('Sites synchronized successfully.'))
                        ->success()
                        ->send();
                }),
        ];
    }

    protected function applySearchToTableQuery(Builder $query): Builder
    {
        if ( filled($searchTerm = $this->getTableSearchQuery()) ) {
            $query
                ->where('domain', 'LIKE', "%{$searchTerm}%")
                ->orWhereHas('users', fn (Builder $query) => $query->where('name', 'LIKE', "%{$searchTerm}%"))
                ->orWhereHas('users', fn (Builder $query) => $query->where('email', 'LIKE', "%{$searchTerm}%"));
        }

        return $query;
    }
}
