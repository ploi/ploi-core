<?php

namespace App\Filament\Resources\Databases;

use Filament\Schemas\Schema;
use Filament\Tables\Columns\TextColumn;
use Filament\Actions\EditAction;
use App\Filament\Resources\Databases\Pages\ListDatabases;
use App\Filament\Resources\Databases\Pages\EditDatabase;
use Filament\Tables;
use App\Models\Database;
use Filament\Tables\Table;
use Filament\Resources\Resource;
use App\Filament\Resources\DatabaseResource\Pages;

class DatabaseResource extends Resource
{
    protected static ?string $model = Database::class;

    protected static string | \BackedEnum | null $navigationIcon = 'heroicon-o-circle-stack';

    protected static string | \UnitEnum | null $navigationGroup = 'Site management';

    protected static ?int $navigationSort = 4;

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
                TextColumn::make('name')
                    ->label(__('Name'))
                    ->searchable(),
                TextColumn::make('server.name')
                    ->label(__('Server'))
                    ->searchable(),
                TextColumn::make('site.domain')
                    ->label(__('Site'))
                    ->searchable(),
                TextColumn::make('status')
                    ->badge()
                    ->formatStateUsing(fn (string $state) => match ($state) {
                        Database::STATUS_BUSY => __('Busy'),
                        Database::STATUS_ACTIVE => __('Active'),
                        default => __('Unknown status')
                    })
                    ->colors([
                        'warning' => Database::STATUS_BUSY,
                        'success' => Database::STATUS_ACTIVE,
                    ])
                    ->label(__('Status')),
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
            ])
            ->toolbarActions([
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
            'index' => ListDatabases::route('/'),
            'edit' => EditDatabase::route('/{record}'),
        ];
    }
}
