<?php

namespace App\Filament\Resources\SiteSystemUsers;

use Filament\Schemas\Schema;
use Filament\Tables\Columns\TextColumn;
use App\Filament\Resources\SiteSystemUsers\Pages\ListSiteSystemUsers;
use Filament\Tables;
use Filament\Tables\Table;
use App\Models\SiteSystemUser;
use Filament\Resources\Resource;
use App\Filament\Resources\SiteSystemUserResource\Pages;

class SiteSystemUserResource extends Resource
{
    protected static ?string $model = SiteSystemUser::class;

    protected static string | \BackedEnum | null $navigationIcon = 'heroicon-o-user-group';

    protected static string | \UnitEnum | null $navigationGroup = 'Site management';

    protected static ?int $navigationSort = 6;

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
                TextColumn::make('user_name')
                    ->label(__('Username'))
                    ->searchable(),
                TextColumn::make('site.domain')
                    ->label(__('Site'))
                    ->searchable(),
                TextColumn::make('created_at')
                    ->label(__('Date'))
                    ->dateTime()
                    ->sortable(),
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
            'index' => ListSiteSystemUsers::route('/'),
        ];
    }
}
