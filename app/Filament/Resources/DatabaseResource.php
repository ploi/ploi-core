<?php

namespace App\Filament\Resources;

use App\Filament\Resources\DatabaseResource\Pages;
use App\Filament\Resources\DatabaseResource\RelationManagers;
use App\Models\Database;
use Filament\Resources\Form;
use Filament\Resources\Resource;
use Filament\Resources\Table;
use Filament\Tables;

class DatabaseResource extends Resource
{
    protected static ?string $model = Database::class;

    protected static ?string $navigationIcon = 'heroicon-o-database';

    protected static ?string $navigationGroup = 'Site management';

    protected static ?int $navigationSort = 4;

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
                Tables\Columns\TextColumn::make('name')
                    ->label(__('Name'))
                    ->searchable(),
                Tables\Columns\TextColumn::make('server.name')
                    ->label(__('Server'))
                    ->searchable(),
                Tables\Columns\TextColumn::make('site.domain')
                    ->label(__('Site'))
                    ->searchable(),
                Tables\Columns\BadgeColumn::make('status')
                    ->enum([
                        Database::STATUS_BUSY => __('Busy'),
                        Database::STATUS_ACTIVE => __('Active'),
                    ])
                    ->colors([
                        'warning' => Database::STATUS_BUSY,
                        'success' => Database::STATUS_ACTIVE,
                    ])
                    ->label(__('Status')),

                Tables\Columns\TextColumn::make('created_at')
                    ->label(__('Date'))
                    ->sortable()
                    ->dateTime(),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                //
            ])
            ->defaultSort('created_at', 'desc');
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
            'index' => Pages\ListDatabases::route('/'),
            'edit' => Pages\EditDatabase::route('/{record}'),
        ];
    }
}
