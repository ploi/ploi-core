<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ProviderRegionResource\Pages;
use App\Models\Provider;
use App\Models\ProviderRegion;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class ProviderRegionResource extends Resource
{
    protected static ?string $model = ProviderRegion::class;

    protected static ?string $navigationIcon = 'heroicon-o-globe-americas';

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
                Tables\Columns\TextColumn::make('id')
                    ->label('ID')
                    ->searchable(),
                Tables\Columns\TextColumn::make('provider.name')
                    ->label(__('Provider'))
                    ->searchable(),
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
                    ->options(fn() => Provider::orderBy('name')->pluck('name', 'id'))
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
