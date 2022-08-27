<?php

namespace App\Filament\Resources;

use Filament\Forms;
use App\Models\User;
use Filament\Tables;
use App\Models\Server;
use Filament\Resources\Form;
use Filament\Resources\Table;
use Filament\Resources\Resource;
use Illuminate\Support\HtmlString;
use Illuminate\Database\Eloquent\Builder;
use App\Actions\Server\SynchronizeServerAction;
use App\Filament\Resources\ServerResource\Pages;
use App\Filament\Resources\ServerResource\RelationManagers;

class ServerResource extends Resource
{
    protected static ?string $model = Server::class;

    protected static ?string $navigationIcon = 'heroicon-o-server';

    protected static ?string $navigationGroup = 'Server management';

    protected static ?string $recordTitleAttribute = 'name';

    public static function getGloballySearchableAttributes(): array
    {
        return ['name', 'ip', 'internal_ip', 'id'];
    }

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('name')
                    ->required()
                    ->label(__('Name'))
                    ->columnSpan(2),
                Forms\Components\TextInput::make('ip')
                    ->required()
                    ->label('IP address')
                    ->columnSpan(2),
                Forms\Components\TextInput::make('internal_ip')
                    ->required()
                    ->label('Internal IP address')
                    ->columnSpan(2),
                Forms\Components\TextInput::make('maximum_sites')
                    ->label(__('Maximum sites'))
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
                    ->wrap()
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
                    ->action(fn (Server $record) => app(SynchronizeServerAction::class)->execute($record->ploi_id))
                    ->visible(fn (Server $record) => $record->status === Server::STATUS_ACTIVE),
            ])
            ->bulkActions([
                Tables\Actions\DeleteBulkAction::make(),
            ]);
    }

    public static function getEloquentQuery(): Builder
    {
        return parent::getEloquentQuery()
            ->with(['users:id,name'])
            ->withCount(['sites']);
    }

    public static function getRelations(): array
    {
        return [
            RelationManagers\UsersRelationManager::class,
            RelationManagers\SitesRelationManager::class,
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
}
