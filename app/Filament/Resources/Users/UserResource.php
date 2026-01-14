<?php

namespace App\Filament\Resources\Users;

use Filament\Schemas\Schema;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Checkbox;
use Filament\Tables\Columns\TextColumn;
use Filament\Actions\EditAction;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use App\Filament\Resources\Users\RelationManagers\SitesRelationManager;
use App\Filament\Resources\Users\RelationManagers\ServersRelationManager;
use App\Filament\Resources\Users\Pages\ListUsers;
use App\Filament\Resources\Users\Pages\CreateUser;
use App\Filament\Resources\Users\Pages\EditUser;
use Filament\Forms;
use App\Models\User;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Resources\Resource;
use STS\FilamentImpersonate\Actions\Impersonate;
use App\Filament\Resources\UserResource\Pages;
use App\Filament\Resources\UserResource\RelationManagers;

class UserResource extends Resource
{
    protected static ?string $model = User::class;

    protected static string | \BackedEnum | null $navigationIcon = 'heroicon-o-users';

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

    public static function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('name')
                    ->label(__('Name'))
                    ->required(),
                TextInput::make('email')
                    ->label(__('E-mail address'))
                    ->email()
                    ->unique(table: User::class, column: 'email', ignoreRecord: true)
                    ->required(),
                Select::make('role')
                    ->options([
                        User::ADMIN => __('Administrator'),
                        User::USER => __('User'),
                    ])
                    ->default(User::USER)
                    ->columnSpan(2)
                    ->required(),
                Select::make('package_id')
                    ->label(__('Package'))
                    ->relationship('package', 'name'),
                Select::make('language')
                    ->label(__('Language'))
                    ->default('en')
                    ->options(collect(languages())->mapWithKeys(fn (string $language) => [$language => $language])),
                Textarea::make('notes')
                    ->label(__('Notes'))
                    ->maxLength(65535),
                Textarea::make('blocked')
                    ->helperText('Entering a reason here will block the user from accessing your panel. It will also display the typed message to the user.')
                    ->label(__('Blocked')),
                Checkbox::make('requires_password_for_ftp')
                    ->default(true)
                    ->label(__('Require password to show FTP password'))
                    ->helperText(__('Disabling this will allow this user to get the FTP password without entering their password.')),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('name')
                    ->label(__('Name'))
                    ->searchable(),
                TextColumn::make('user_name')
                    ->label(__('User name'))
                    ->searchable(),
                TextColumn::make('email')
                    ->label(__('E-mail address'))
                    ->searchable(),
                TextColumn::make('servers_count')
                    ->label(__('Servers'))
                    ->counts('servers')
                    ->sortable(),
                TextColumn::make('sites_count')
                    ->label(__('Sites'))
                    ->counts('sites')
                    ->sortable(),
                TextColumn::make('role')
                    ->label(__('Role')),
                TextColumn::make('package.name')
                    ->label(__('Package')),
            ])
            ->filters([
                //
            ])
            ->recordActions([
                Impersonate::make('impersonate')
                    ->tooltip('Login as this user (impersonate)')
                    ->visible(fn () => config('core.impersonation')),
                EditAction::make(),
                DeleteAction::make(),
            ])
            ->toolbarActions([
                DeleteBulkAction::make(),
            ])
            ->defaultSort('users.created_at', 'desc');
    }

    public static function getRelations(): array
    {
        return [
            SitesRelationManager::class,
            ServersRelationManager::class,
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => ListUsers::route('/'),
            'create' => CreateUser::route('/create'),
            'edit' => EditUser::route('/{record}/edit'),
        ];
    }
}
