<?php

namespace App\Filament\Resources;

use App\Filament\Resources\SiteSystemUserResource\Pages;
use App\Filament\Resources\SiteSystemUserResource\RelationManagers;
use App\Models\SiteSystemUser;
use Filament\Resources\Form;
use Filament\Resources\Resource;
use Filament\Resources\Table;
use Filament\Tables;

class SiteSystemUserResource extends Resource
{
    protected static ?string $model = SiteSystemUser::class;

    protected static ?string $navigationIcon = 'heroicon-o-user-group';

    protected static ?string $navigationGroup = 'Site management';

    protected static ?int $navigationSort = 6;

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
                Tables\Columns\TextColumn::make('user_name')
                    ->label(__('Username'))
                    ->searchable(),
                Tables\Columns\TextColumn::make('site.domain')
                    ->label(__('Site'))
                    ->searchable(),
                Tables\Columns\TextColumn::make('created_at')
                    ->label(__('Date'))
                    ->dateTime()
                    ->sortable(),
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
            'index' => Pages\ListSiteSystemUsers::route('/'),
        ];
    }
}
