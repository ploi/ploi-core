<?php

namespace App\Filament\Resources;

use Filament\Forms;
use Filament\Tables;
use App\Models\Redirect;
use Filament\Resources\Form;
use Filament\Resources\Table;
use Filament\Resources\Resource;
use App\Filament\Resources\RedirectResource\Pages;

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
                Tables\Columns\TextColumn::make('redirect_from')
                    ->wrap()
                    ->label(__('Redirect from'))
                    ->searchable(),
                Tables\Columns\TextColumn::make('redirect_to')
                    ->wrap()
                    ->label(__('Redirect to'))
                    ->searchable(),
                Tables\Columns\TextColumn::make('server.name')
                    ->label(__('Server'))
                    ->searchable(),
                Tables\Columns\TextColumn::make('site.domain')
                    ->label(__('Site'))
                    ->searchable(),
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
            'index' => Pages\ListRedirects::route('/'),
        ];
    }
}
