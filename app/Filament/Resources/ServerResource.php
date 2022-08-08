<?php

namespace App\Filament\Resources;

use App\Actions\Server\SynchronizeServerAction;
use App\Filament\Resources\ServerResource\Pages;
use App\Filament\Resources\ServerResource\RelationManagers;
use App\Models\Server;
use App\Models\User;
use Filament\Forms;
use Filament\Resources\Form;
use Filament\Resources\Resource;
use Filament\Resources\Table;
use Filament\Tables;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\HtmlString;

class ServerResource extends Resource
{
    protected static ?string $model = Server::class;

    protected static ?string $navigationIcon = 'heroicon-o-server';

    protected static ?string $navigationGroup = 'Server management';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('name')
                    ->label(__('Name'))
                    ->rules(['alpha_dash'])
                    ->maxLength(40)
                    ->columnSpan(2),
                Forms\Components\TextInput::make('ip')
                    ->label(__('IP address'))
                    ->columnSpan(2),
                Forms\Components\TextInput::make('maximum_sites')
                    ->integer()
                    ->required()
                    ->columnSpan(2),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name')
                    ->label(__('Name'))
                    ->searchable(),
                Tables\Columns\BadgeColumn::make('status')
                    ->label(__('Status'))
                    ->enum([
                        Server::STATUS_BUSY => __('Busy'),
                        Server::STATUS_ACTIVE => __('Active'),
                    ])
                    ->colors([
                        'warning' => Server::STATUS_BUSY,
                        'success' => Server::STATUS_ACTIVE,
                    ]),
                Tables\Columns\TextColumn::make('users')
                    ->label(__('Users'))
                    ->getStateUsing(function (Server $record) {
                        $state = $record
                            ->users
                            ->map(function (User $user) {
                                return '<a href="' . route('filament.resources.users.edit', ['record' => $user]) . '" class="text-primary-600">' . $user->name . '</a>';
                            })
                            ->implode(', ') ?: '-';

                        return new HtmlString($state);
                    }),
                Tables\Columns\TextColumn::make('maximum_sites')
                    ->label(__('Max sites'))
                    ->formatStateUsing(fn (Server $record) => $record->maximum_sites . " (Current: {$record->sites_count})"),
                Tables\Columns\TextColumn::make('ip')
                    ->label(__('IP')),
                Tables\Columns\TextColumn::make('created_at')
                    ->label(__('Date'))
                    ->dateTime(),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\Action::make('synchronize_server')
                    ->label(__('Synchronize'))
                    ->tooltip(__('This will synchronize the latest data from this provider to your Ploi Core installation'))
                    ->icon('heroicon-o-refresh')
                    ->action(fn (Server $record) => app(SynchronizeServerAction::class)->execute($record->ploi_id)),
            ])
            ->bulkActions([
                Tables\Actions\DeleteBulkAction::make(),
            ]);
    }

    public static function getEloquentQuery(): Builder
    {
        return parent::getEloquentQuery()
            ->with(['users'])
            ->withCount(['sites']);
    }

    public static function getRelations(): array
    {
        return [
            RelationManagers\UsersRelationManager::class,
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListServers::route('/'),
            'edit' => Pages\EditServer::route('/{record}/edit'),
            'synchronize' => Pages\SynchronizeServers::route('/synchronize'),
        ];
    }

    public static function canCreate(): bool
    {
        return false;
    }
}
