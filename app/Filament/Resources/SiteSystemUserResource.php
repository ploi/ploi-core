<?php

namespace App\Filament\Resources;

use App\Filament\Resources\SiteSystemUserResource\Pages;
use App\Filament\Resources\SiteSystemUserResource\RelationManagers;
use App\Models\SiteSystemUser;
use Filament\Forms;
use Filament\Resources\Form;
use Filament\Resources\Resource;
use Filament\Resources\Table;
use Filament\Tables;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class SiteSystemUserResource extends Resource
{
    protected static ?string $model = SiteSystemUser::class;

    protected static ?string $navigationIcon = 'heroicon-o-collection';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('user_name')
                    ->maxLength(255),
                Forms\Components\Textarea::make('ftp_password')
                    ->maxLength(65535),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('user_name'),
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime(),
                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime(),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\DeleteBulkAction::make(),
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
            'index' => Pages\ListSiteSystemUsers::route('/'),
            'create' => Pages\CreateSiteSystemUser::route('/create'),
            'edit' => Pages\EditSiteSystemUser::route('/{record}/edit'),
        ];
    }    
}
