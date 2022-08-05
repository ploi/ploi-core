<?php

namespace App\Filament\Resources;

use App\Filament\Resources\RedirectResource\Pages;
use App\Filament\Resources\RedirectResource\RelationManagers;
use App\Models\Redirect;
use Filament\Forms;
use Filament\Resources\Form;
use Filament\Resources\Resource;
use Filament\Resources\Table;
use Filament\Tables;

class RedirectResource extends Resource
{
    protected static ?string $model = Redirect::class;

    protected static ?string $navigationIcon = 'heroicon-o-external-link';

    protected static ?string $navigationGroup = 'Site management';

    protected static ?int $navigationSort = 5;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('site_id'),
                Forms\Components\TextInput::make('server_id'),
                Forms\Components\TextInput::make('status')
                    ->maxLength(255),
                Forms\Components\TextInput::make('ploi_id'),
                Forms\Components\TextInput::make('redirect_from')
                    ->maxLength(255),
                Forms\Components\TextInput::make('redirect_to')
                    ->maxLength(255),
                Forms\Components\TextInput::make('type')
                    ->maxLength(255),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('server.name')
                    ->label(__('Server')),
                Tables\Columns\TextColumn::make('site.domain')
                    ->label(__('Site')),
                Tables\Columns\TextColumn::make('type')
                    ->label(__('Type')),
                Tables\Columns\BadgeColumn::make('status')
                    ->enum([
                        Redirect::STATUS_BUSY => __('Busy'),
                        Redirect::STATUS_ACTIVE => __('Active'),
                    ])
                    ->colors([
                        'warning' => Redirect::STATUS_BUSY,
                        'success' => Redirect::STATUS_ACTIVE,
                    ])
                    ->label(__('Status')),
                Tables\Columns\TextColumn::make('redirect_from')
                    ->label(__('Redirect from')),
                Tables\Columns\TextColumn::make('redirect_to')
                    ->label(__('Redirect to')),
                Tables\Columns\TextColumn::make('created_at')
                    ->label(__('Date'))
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
            'index' => Pages\ListRedirects::route('/'),
        ];
    }
}
