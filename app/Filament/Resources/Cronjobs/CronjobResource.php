<?php

namespace App\Filament\Resources\Cronjobs;

use Filament\Schemas\Schema;
use Filament\Tables\Columns\TextColumn;
use App\Filament\Resources\Cronjobs\Pages\ListCronjobs;
use Filament\Tables;
use App\Models\Cronjob;
use Filament\Tables\Table;
use Filament\Resources\Resource;
use App\Filament\Resources\CronjobResource\Pages;

class CronjobResource extends Resource
{
    protected static ?string $model = Cronjob::class;

    protected static string | \BackedEnum | null $navigationIcon = 'heroicon-o-clock';

    protected static string | \UnitEnum | null $navigationGroup = 'Site management';

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
                TextColumn::make('site.domain')
                    ->searchable()
                    ->label(__('Site')),
                TextColumn::make('status')
                    ->badge()
                    ->formatStateUsing(fn (string $state) => match ($state) {
                        Cronjob::STATUS_BUSY => __('Busy'),
                        Cronjob::STATUS_ACTIVE => __('Active'),
                        default => __('Unknown status')
                    })
                    ->colors([
                        'warning' => Cronjob::STATUS_BUSY,
                        'success' => Cronjob::STATUS_ACTIVE,
                    ])
                    ->label(__('Status')),
                TextColumn::make('server.name')
                    ->searchable()
                    ->label(__('Server')),
                TextColumn::make('command')
                    ->searchable()
                    ->label(__('Command')),
                TextColumn::make('frequency')
                    ->label(__('Frequency')),
                TextColumn::make('created_at')
                    ->label(__('Date'))
                    ->sortable()
                    ->dateTime(),
            ])
            ->filters([
                //
            ])
            ->recordActions([
                //
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
            'index' => ListCronjobs::route('/'),
        ];
    }
}
