<?php

namespace App\Filament\Resources;

use Filament\Forms;
use App\Models\User;
use Filament\Tables;
use Filament\Resources\Form;
use Filament\Resources\Table;
use Filament\Resources\Resource;
use STS\FilamentImpersonate\Impersonate;
use App\Filament\Resources\UserResource\Pages;
use App\Filament\Resources\UserResource\RelationManagers;

class UserResource extends Resource
{
    protected static ?string $model = User::class;

    protected static ?string $navigationIcon = 'heroicon-o-users';

    protected static ?int $navigationSort = 2;

    protected static ?string $recordTitleAttribute = 'name';

    public static function getGloballySearchableAttributes(): array
    {
        return ['user_name', 'name', 'email'];
    }

    public static function getLabel(): ?string
    {
        return __('User');
    }

    public static function getPluralLabel(): ?string
    {
        return __('Users');
    }

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('name')
                    ->label(__('Name'))
                    ->required(),
                Forms\Components\TextInput::make('email')
                    ->label(__('E-mail address'))
                    ->email()
                    ->unique(table: User::class, column: 'email', ignoreRecord: true)
                    ->required(),
                Forms\Components\Select::make('role')
                    ->options([
                        User::ADMIN => __('Administrator'),
                        User::USER => __('User'),
                    ])
                    ->default(User::USER)
                    ->columnSpan(2)
                    ->required(),
                Forms\Components\Select::make('package_id')
                    ->label(__('Package'))
                    ->relationship('package', 'name'),
                Forms\Components\Select::make('language')
                    ->label(__('Language'))
                    ->default('en')
                    ->options(collect(languages())->mapWithKeys(fn (string $language) => [$language => $language])),
                Forms\Components\Textarea::make('notes')
                    ->label(__('Notes'))
                    ->maxLength(65535),
                Forms\Components\Textarea::make('blocked')
                    ->helperText('Entering a reason here will block the user from accessing your panel. It will also display the typed message to the user.')
                    ->label(__('Blocked')),
                Forms\Components\Checkbox::make('requires_password_for_ftp')
                    ->default(true)
                    ->label(__('Require password to show FTP password'))
                    ->helperText(__('Disabling this will allow this user to get the FTP password without entering their password.')),
            ]);
    }

    public static function table(Table $table): Table
    {
        $actions = [];

        if (config('core.impersonation')) {
            $actions[] = Impersonate::make('impersonate')->tooltip('Login as this user (impersonate)');
        }

        $actions[] = Tables\Actions\EditAction::make();

        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name')
                    ->label(__('Name'))
                    ->searchable(),
                Tables\Columns\TextColumn::make('user_name')
                    ->label(__('User name'))
                    ->searchable(),
                Tables\Columns\TextColumn::make('email')
                    ->label(__('E-mail address'))
                    ->searchable(),
                Tables\Columns\TextColumn::make('servers_count')
                    ->label(__('Servers'))
                    ->counts('servers')
                    ->sortable(),
                Tables\Columns\TextColumn::make('sites_count')
                    ->label(__('Sites'))
                    ->counts('sites')
                    ->sortable(),
                Tables\Columns\TextColumn::make('role')
                    ->label(__('Role')),
                Tables\Columns\TextColumn::make('package.name')
                    ->label(__('Package')),
            ])
            ->filters([
                //
            ])
            ->actions($actions)
            ->bulkActions([
                Tables\Actions\DeleteBulkAction::make(),
            ])
            ->defaultSort('users.created_at', 'desc');
    }

    public static function getRelations(): array
    {
        return [
            RelationManagers\SitesRelationManager::class,
            RelationManagers\ServersRelationManager::class,
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
