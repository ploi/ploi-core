<?php

namespace App\Filament\Resources;

use App\Filament\Resources\CronjobResource\Pages;
use App\Filament\Resources\CronjobResource\RelationManagers;
use App\Models\Cronjob;
use Filament\Forms;
use Filament\Resources\Form;
use Filament\Resources\Resource;
use Filament\Resources\Table;
use Filament\Tables;

class CronjobResource extends Resource
{
    protected static ?string $model = Cronjob::class;

    protected static ?string $navigationIcon = 'heroicon-o-collection';

    protected static ?string $navigationGroup = 'Site management';

    protected static ?int $navigationSort = 3;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('site_id'),
                Forms\Components\TextInput::make('server_id'),
                Forms\Components\TextInput::make('status')
                    ->maxLength(255),
                Forms\Components\TextInput::make('ploi_id'),
                Forms\Components\TextInput::make('command')
                    ->maxLength(255),
                Forms\Components\TextInput::make('user')
                    ->maxLength(255),
                Forms\Components\TextInput::make('frequency')
                    ->required()
                    ->maxLength(255),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('site_id'),
                Tables\Columns\TextColumn::make('server_id'),
                Tables\Columns\TextColumn::make('status'),
                Tables\Columns\TextColumn::make('ploi_id'),
                Tables\Columns\TextColumn::make('command'),
                Tables\Columns\TextColumn::make('user'),
                Tables\Columns\TextColumn::make('frequency'),
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
            'index' => Pages\ListCronjobs::route('/'),
            'create' => Pages\CreateCronjob::route('/create'),
            'edit' => Pages\EditCronjob::route('/{record}/edit'),
        ];
    }
}
