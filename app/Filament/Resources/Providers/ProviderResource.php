<?php

namespace App\Filament\Resources\Providers;

use Filament\Schemas\Schema;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\CheckboxList;
use Filament\Tables\Columns\TextColumn;
use Filament\Actions\EditAction;
use Filament\Actions\Action;
use App\Filament\Resources\Providers\Pages\ListProviders;
use App\Filament\Resources\Providers\Pages\SynchronizeProviders;
use App\Filament\Resources\Providers\Pages\EditProvider;
use Filament\Forms;
use Filament\Tables;
use App\Models\Provider;
use Filament\Tables\Table;
use App\Models\ProviderPlan;
use Filament\Resources\Resource;
use Filament\Notifications\Notification;
use Illuminate\Database\Eloquent\Builder;
use App\Filament\Resources\ProviderResource\Pages;
use App\Actions\Provider\SynchronizeProviderAction;
use App\Filament\Resources\Providers\Widgets\AvailableProvidersOverview;

class ProviderResource extends Resource
{
    protected static ?string $model = Provider::class;

    protected static string | \BackedEnum | null $navigationIcon = 'heroicon-o-cloud-arrow-up';

    protected static string | \UnitEnum | null $navigationGroup = 'Providers';

    protected static ?int $navigationSort = 1;

    public static function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('name')
                    ->label(__('Name'))
                    ->required()
                    ->columnSpan(2),
                CheckboxList::make('allowed_plans')
                    ->options(function (Provider $record) {
                        return $record->plans->mapWithKeys(fn (ProviderPlan $plan) => [$plan->id => $plan->label ?? $plan->plan_id]);
                    })
                    ->label(__('Allowed Plans')),
                CheckboxList::make('allowed_regions')
                    ->options(fn (Provider $record) => $record->regions->pluck('label', 'id'))
                    ->label(__('Allowed Regions')),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('id')
                    ->label('ID')
                    ->searchable(),
                TextColumn::make('name')
                    ->description(function (Provider $record) {
                        return "{$record->plans_count} plan(s) · {$record->regions_count} region(s)";
                    })
                    ->label(__('Name'))
                    ->searchable(),
                TextColumn::make('label')
                    ->label(__('Label'))
                    ->searchable(),
                TextColumn::make('created_at')
                    ->label(__('Date'))
                    ->sortable()
                    ->dateTime(),
            ])
            ->filters([
                //
            ])
            ->recordActions([
                EditAction::make(),
                Action::make('synchronize_provider')
                    ->label(__('Synchronize'))
                    ->tooltip(__('This will synchronize the latest data from this provider to your Ploi Core installation'))
                    ->icon('heroicon-o-arrow-path')
                    ->action(function (Provider $record) {
                        $provider = app(SynchronizeProviderAction::class)->execute($record->ploi_id);

                        Notification::make()
                            ->title(__('Provider :provider synchronized successfully.', ['provider' => $provider->name]))
                            ->success()
                            ->send();
                    }),
            ])
            ->toolbarActions([
                //
            ])
            ->defaultSort('created_at', 'desc');
    }

    public static function getEloquentQuery(): Builder
    {
        return parent::getEloquentQuery()
            ->withCount(['plans', 'regions']);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getWidgets(): array
    {
        return [
            AvailableProvidersOverview::class,
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => ListProviders::route('/'),
            'synchronize' => SynchronizeProviders::route('/synchronize'),
            'edit' => EditProvider::route('/{record}'),
        ];
    }
}
