<?php

namespace App\Filament\Resources;

use Filament\Forms;
use Filament\Tables;
use App\Models\Redirect;
use Filament\Forms\Form;
use Filament\Tables\Table;
use Filament\Resources\Resource;
use App\Filament\Resources\RedirectResource\Pages;

class RedirectResource extends Resource
{
    protected static ?string $model = Redirect::class;

    protected static ?string $navigationIcon = 'heroicon-o-arrow-top-right-on-square';

    protected static ?string $navigationGroup = 'Site management';

    protected static ?int $navigationSort = 5;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('site_id'),
                Forms\Components\TextInput::make('server_id'),
                Forms\Components\TextInput::make('status'),
                Forms\Components\TextInput::make('ploi_id'),
                Forms\Components\TextInput::make('redirect_from'),
                Forms\Components\TextInput::make('redirect_to'),
                Forms\Components\TextInput::make('type'),
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
                Tables\Columns\TextColumn::make('status')
                    ->badge()
                    ->formatStateUsing(fn (string $state) => match ($state) {
                        Redirect::STATUS_BUSY => __('Busy'),
                        Redirect::STATUS_ACTIVE => __('Active'),
                        default => __('Unknown status')
                    })
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
