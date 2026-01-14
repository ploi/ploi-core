<?php

namespace App\Filament\Resources\ProviderRegions;

use Filament\Schemas\Schema;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\SelectFilter;
use App\Filament\Resources\ProviderRegions\Pages\ListProviderRegions;
use Filament\Tables;
use App\Models\Provider;
use Filament\Tables\Table;
use App\Models\ProviderRegion;
use Filament\Resources\Resource;
use App\Filament\Resources\ProviderRegionResource\Pages;

class ProviderRegionResource extends Resource
{
    protected static ?string $model = ProviderRegion::class;

    protected static string | \BackedEnum | null $navigationIcon = 'heroicon-o-globe-americas';

    protected static string | \UnitEnum | null $navigationGroup = 'Providers';

    protected static ?int $navigationSort = 3;

    public static function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                //
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('id')
                    ->label('ID')
                    ->searchable(),
                TextColumn::make('provider.name')
                    ->label(__('Provider'))
                    ->searchable(),
                TextColumn::make('region_id')
                    ->searchable()
                    ->label(__('Region')),
                TextColumn::make('label')
                    ->searchable()
                    ->label(__('Label')),
            ])
            ->filters([
                SelectFilter::make('provider_id')
                    ->label(__('Provider'))
                    ->options(fn () => Provider::orderBy('name')->pluck('name', 'id'))
            ])
            ->recordActions([
                //
            ])
            ->toolbarActions([
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
            'index' => ListProviderRegions::route('/'),
        ];
    }
}
