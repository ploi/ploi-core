<?php

namespace App\Filament\Resources\Redirects;

use Filament\Schemas\Schema;
use Filament\Forms\Components\TextInput;
use Filament\Tables\Columns\TextColumn;
use App\Filament\Resources\Redirects\Pages\ListRedirects;
use Filament\Forms;
use Filament\Tables;
use App\Models\Redirect;
use Filament\Tables\Table;
use Filament\Resources\Resource;
use App\Filament\Resources\RedirectResource\Pages;

class RedirectResource extends Resource
{
    protected static ?string $model = Redirect::class;

    protected static string | \BackedEnum | null $navigationIcon = 'heroicon-o-arrow-top-right-on-square';

    protected static string | \UnitEnum | null $navigationGroup = 'Site management';

    protected static ?int $navigationSort = 5;

    public static function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('site_id'),
                TextInput::make('server_id'),
                TextInput::make('status'),
                TextInput::make('ploi_id'),
                TextInput::make('redirect_from'),
                TextInput::make('redirect_to'),
                TextInput::make('type'),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('redirect_from')
                    ->wrap()
                    ->label(__('Redirect from'))
                    ->searchable(),
                TextColumn::make('redirect_to')
                    ->wrap()
                    ->label(__('Redirect to'))
                    ->searchable(),
                TextColumn::make('server.name')
                    ->label(__('Server'))
                    ->searchable(),
                TextColumn::make('site.domain')
                    ->label(__('Site'))
                    ->searchable(),
                TextColumn::make('type')
                    ->label(__('Type')),
                TextColumn::make('status')
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
            'index' => ListRedirects::route('/'),
        ];
    }
}
