<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ServerResource\Pages;
use App\Filament\Resources\ServerResource\RelationManagers;
use App\Models\Server;
use Filament\Forms;
use Filament\Resources\Form;
use Filament\Resources\Resource;
use Filament\Resources\Table;
use Filament\Tables;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class ServerResource extends Resource
{
    protected static ?string $model = Server::class;

    protected static ?string $navigationIcon = 'heroicon-o-collection';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('provider_id'),
                Forms\Components\TextInput::make('provider_plan_id'),
                Forms\Components\TextInput::make('provider_region_id'),
                Forms\Components\TextInput::make('status')
                    ->maxLength(255),
                Forms\Components\TextInput::make('ploi_id'),
                Forms\Components\TextInput::make('name')
                    ->maxLength(255),
                Forms\Components\TextInput::make('ip')
                    ->maxLength(255),
                Forms\Components\TextInput::make('internal_ip')
                    ->maxLength(255),
                Forms\Components\TextInput::make('ssh_port')
                    ->required(),
                Forms\Components\TextInput::make('available_php_versions'),
                Forms\Components\TextInput::make('type')
                    ->required()
                    ->maxLength(255),
                Forms\Components\TextInput::make('database_type')
                    ->required()
                    ->maxLength(255),
                Forms\Components\TextInput::make('maximum_sites')
                    ->required(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('provider_id'),
                Tables\Columns\TextColumn::make('provider_plan_id'),
                Tables\Columns\TextColumn::make('provider_region_id'),
                Tables\Columns\TextColumn::make('status'),
                Tables\Columns\TextColumn::make('ploi_id'),
                Tables\Columns\TextColumn::make('name'),
                Tables\Columns\TextColumn::make('ip'),
                Tables\Columns\TextColumn::make('internal_ip'),
                Tables\Columns\TextColumn::make('ssh_port'),
                Tables\Columns\TextColumn::make('available_php_versions'),
                Tables\Columns\TextColumn::make('type'),
                Tables\Columns\TextColumn::make('database_type'),
                Tables\Columns\TextColumn::make('maximum_sites'),
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
            'index' => Pages\ListServers::route('/'),
            'create' => Pages\CreateServer::route('/create'),
            'edit' => Pages\EditServer::route('/{record}/edit'),
        ];
    }    
}
