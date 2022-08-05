<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ProviderRegionResource\Pages;
use App\Filament\Resources\ProviderRegionResource\RelationManagers;
use App\Models\Provider;
use App\Models\ProviderRegion;
use Filament\Resources\Form;
use Filament\Resources\Resource;
use Filament\Resources\Table;
use Filament\Tables;

class ProviderRegionResource extends Resource
{
    protected static ?string $model = ProviderRegion::class;

    protected static ?string $navigationIcon = 'heroicon-o-globe';

    protected static ?string $navigationGroup = 'Providers';

    protected static ?int $navigationSort = 3;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                //
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('provider.name')
                    ->label(__('Provider')),
                Tables\Columns\TextColumn::make('region_id')
                    ->searchable()
                    ->label(__('Region')),
                Tables\Columns\TextColumn::make('label')
                    ->searchable()
                    ->label(__('Label')),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('provider_id')
                    ->label(__('Provider'))
                    ->options(fn () => Provider::orderBy('name')->get()->mapWithKeys(fn (Provider $provider) => [$provider->id => $provider->name])),
            ])
            ->actions([
                //
            ])
            ->bulkActions([
                //
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListProviderRegions::route('/'),
        ];
    }
}
