<?php

namespace App\Filament\Resources;

use App\Filament\Resources\UserResource\Pages;
use App\Filament\Resources\UserResource\RelationManagers;
use App\Models\User;
use Filament\Forms;
use Filament\Resources\Form;
use Filament\Resources\Resource;
use Filament\Resources\Table;
use Filament\Tables;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class UserResource extends Resource
{
    protected static ?string $model = User::class;

    protected static ?string $navigationIcon = 'heroicon-o-collection';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('package_id'),
                Forms\Components\TextInput::make('user_name')
                    ->maxLength(255),
                Forms\Components\TextInput::make('name')
                    ->maxLength(255),
                Forms\Components\TextInput::make('company')
                    ->maxLength(255),
                Forms\Components\TextInput::make('address')
                    ->maxLength(255),
                Forms\Components\TextInput::make('city')
                    ->maxLength(255),
                Forms\Components\TextInput::make('zip')
                    ->maxLength(255),
                Forms\Components\TextInput::make('country')
                    ->maxLength(255),
                Forms\Components\Textarea::make('notes')
                    ->maxLength(65535),
                Forms\Components\Textarea::make('billing_details')
                    ->maxLength(65535),
                Forms\Components\TextInput::make('email')
                    ->email()
                    ->required()
                    ->maxLength(255),
                Forms\Components\DateTimePicker::make('email_verified_at'),
                Forms\Components\TextInput::make('password')
                    ->password()
                    ->maxLength(255),
                Forms\Components\TextInput::make('role')
                    ->required()
                    ->maxLength(255),
                Forms\Components\TextInput::make('theme')
                    ->required()
                    ->maxLength(255),
                Forms\Components\TextInput::make('language')
                    ->required()
                    ->maxLength(255),
                Forms\Components\Textarea::make('ftp_password')
                    ->maxLength(65535),
                Forms\Components\Textarea::make('blocked')
                    ->maxLength(65535),
                Forms\Components\Toggle::make('requires_password_for_ftp')
                    ->required(),
                Forms\Components\Toggle::make('keyboard_shortcuts')
                    ->required(),
                Forms\Components\TextInput::make('stripe_id')
                    ->maxLength(255),
                Forms\Components\TextInput::make('card_brand')
                    ->maxLength(255),
                Forms\Components\TextInput::make('card_last_four')
                    ->maxLength(4),
                Forms\Components\DateTimePicker::make('trial_ends_at'),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('package_id'),
                Tables\Columns\TextColumn::make('user_name'),
                Tables\Columns\TextColumn::make('name'),
                Tables\Columns\TextColumn::make('company'),
                Tables\Columns\TextColumn::make('address'),
                Tables\Columns\TextColumn::make('city'),
                Tables\Columns\TextColumn::make('zip'),
                Tables\Columns\TextColumn::make('country'),
                Tables\Columns\TextColumn::make('notes'),
                Tables\Columns\TextColumn::make('billing_details'),
                Tables\Columns\TextColumn::make('email'),
                Tables\Columns\TextColumn::make('email_verified_at')
                    ->dateTime(),
                Tables\Columns\TextColumn::make('role'),
                Tables\Columns\TextColumn::make('theme'),
                Tables\Columns\TextColumn::make('language'),
                Tables\Columns\TextColumn::make('blocked'),
                Tables\Columns\BooleanColumn::make('keyboard_shortcuts'),
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime(),
                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime(),
                Tables\Columns\TextColumn::make('stripe_id'),
                Tables\Columns\TextColumn::make('card_brand'),
                Tables\Columns\TextColumn::make('card_last_four'),
                Tables\Columns\TextColumn::make('trial_ends_at')
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
            'index' => Pages\ListUsers::route('/'),
            'create' => Pages\CreateUser::route('/create'),
            'edit' => Pages\EditUser::route('/{record}/edit'),
        ];
    }    
}
