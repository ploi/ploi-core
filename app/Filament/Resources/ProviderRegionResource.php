<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ProviderRegionResource\Pages;
use App\Filament\Resources\ProviderRegionResource\RelationManagers;
use App\Models\ProviderRegion;
use Filament\Forms;
use Filament\Resources\Form;
use Filament\Resources\Resource;
use Filament\Resources\Table;
use Filament\Tables;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class ProviderRegionResource extends Resource
{
    protected static ?string $model = ProviderRegion::class;

    protected static ?string $navigationIcon = 'heroicon-o-collection';

    protected static ?string $navigationGroup = 'Providers';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('provider_id'),
                Forms\Components\TextInput::make('region_id')
                    ->maxLength(255),
                Forms\Components\TextInput::make('label')
                    ->maxLength(255),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('provider_id'),
                Tables\Columns\TextColumn::make('region_id'),
                Tables\Columns\TextColumn::make('label'),
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime(),
                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime(),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\DeleteBulkAction::make(),
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
            'create' => Pages\CreateProviderRegion::route('/create'),
            'edit' => Pages\EditProviderRegion::route('/{record}/edit'),
        ];
    }
}
