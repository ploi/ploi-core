<?php

namespace App\Filament\Resources;

use Filament\Tables;
use App\Models\Cronjob;
use Filament\Resources\Form;
use Filament\Resources\Table;
use Filament\Resources\Resource;
use App\Filament\Resources\CronjobResource\Pages;

class CronjobResource extends Resource
{
    protected static ?string $model = Cronjob::class;

    protected static ?string $navigationIcon = 'heroicon-o-clock';

    protected static ?string $navigationGroup = 'Site management';

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
                Tables\Columns\TextColumn::make('site.domain')
                    ->searchable()
                    ->label(__('Site')),
                Tables\Columns\BadgeColumn::make('status')
                    ->enum([
                        Cronjob::STATUS_BUSY => __('Busy'),
                        Cronjob::STATUS_ACTIVE => __('Active'),
                    ])
                    ->colors([
                        'warning' => Cronjob::STATUS_BUSY,
                        'success' => Cronjob::STATUS_ACTIVE,
                    ])
                    ->label(__('Status')),
                Tables\Columns\TextColumn::make('server.name')
                    ->searchable()
                    ->label(__('Server')),
                Tables\Columns\TextColumn::make('command')
                    ->searchable()
                    ->label(__('Command')),
                Tables\Columns\TextColumn::make('frequency')
                    ->label(__('Frequency')),
                Tables\Columns\TextColumn::make('created_at')
                    ->label(__('Date'))
                    ->sortable()
                    ->dateTime(),
            ])
            ->filters([
                //
            ])
            ->actions([
                //
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
            'index' => Pages\ListCronjobs::route('/'),
        ];
    }
}
