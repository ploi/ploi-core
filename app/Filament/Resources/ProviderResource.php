<?php

namespace App\Filament\Resources;

use App\Actions\Provider\SynchronizeProviderAction;
use App\Filament\Resources\ProviderResource\Pages;
use App\Filament\Resources\ProviderResource\RelationManagers;
use App\Filament\Resources\ProviderResource\Widgets\AvailableProvidersOverview;
use App\Models\Provider;
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
                Forms\Components\TextInput::make('ploi_id'),
                Forms\Components\TextInput::make('label')
                    ->maxLength(255),
                Forms\Components\TextInput::make('name')
                    ->maxLength(255),
                Forms\Components\TextInput::make('allowed_plans'),
                Forms\Components\TextInput::make('allowed_regions'),
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
                    ->label(__('Name')),
                Tables\Columns\TextColumn::make('label')
                    ->label(__('Label')),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\Action::make('synchronize_provider')
                    ->label(__('Synchronize'))
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
        ];
    }
}
