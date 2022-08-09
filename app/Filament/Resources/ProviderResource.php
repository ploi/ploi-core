<?php

namespace App\Filament\Resources;

use App\Actions\Provider\SynchronizeProviderAction;
use App\Filament\Resources\ProviderResource\Pages;
use App\Filament\Resources\ProviderResource\RelationManagers;
use App\Filament\Resources\ProviderResource\Widgets\AvailableProvidersOverview;
use App\Models\Provider;
use App\Models\ProviderPlan;
use Filament\Forms;
use Filament\Notifications\Notification;
use Filament\Resources\Form;
use Filament\Resources\Resource;
use Filament\Resources\Table;
use Filament\Tables;
use Illuminate\Database\Eloquent\Builder;

class ProviderResource extends Resource
{
    protected static ?string $model = Provider::class;

    protected static ?string $navigationIcon = 'heroicon-o-cloud-upload';

    protected static ?string $navigationGroup = 'Providers';

    protected static ?int $navigationSort = 1;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('name')
                    ->label(__('Name'))
                    ->required()
                    ->columnSpan(2),
                Forms\Components\CheckboxList::make('allowed_plans')
                    ->options(function (Provider $record) {
                        return $record->plans->mapWithKeys(fn (ProviderPlan $plan) => [$plan->id => $plan->label ?? $plan->plan_id]);
                    })
                    ->label(__('Allowed Plans')),
                Forms\Components\CheckboxList::make('allowed_regions')
                    ->options(fn (Provider $record) => $record->regions->pluck('label', 'id'))
                    ->label(__('Allowed Regions')),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name')
                    ->description(function (Provider $record) {
                        return "{$record->plans_count} plan(s) · {$record->regions_count} region(s)";
                    })
                    ->label(__('Name'))
                    ->searchable(),
                Tables\Columns\TextColumn::make('label')
                    ->label(__('Label'))
                    ->searchable(),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\Action::make('synchronize_provider')
                    ->label(__('Synchronize'))
                    ->tooltip(__('This will synchronize the latest data from this provider to your Ploi Core installation'))
                    ->icon('heroicon-o-refresh')
                    ->action(function (Provider $record) {
                        $provider = app(SynchronizeProviderAction::class)->execute($record->ploi_id);

                        Notification::make()
                            ->body(__('Provider :provider synchronized successfully.', ['provider' => $provider->name]))
                            ->success()
                            ->send();
                    }),
            ])
            ->bulkActions([
                //
            ]);
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
            'index' => Pages\ListProviders::route('/'),
            'synchronize' => Pages\SynchronizeProviders::route('/synchronize'),
            'edit' => Pages\EditProvider::route('/{record}'),
        ];
    }
}
