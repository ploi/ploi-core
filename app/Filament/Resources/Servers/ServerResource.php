<?php

namespace App\Filament\Resources\Servers;

use Filament\Schemas\Schema;
use Filament\Forms\Components\TextInput;
use Filament\Tables\Columns\TextColumn;
use Filament\Actions\EditAction;
use Filament\Actions\Action;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use App\Filament\Resources\Servers\RelationManagers\UsersRelationManager;
use App\Filament\Resources\Servers\RelationManagers\SitesRelationManager;
use App\Filament\Resources\Servers\Pages\ListServers;
use App\Filament\Resources\Servers\Pages\EditServer;
use App\Filament\Resources\Servers\Pages\SynchronizeServers;
use Filament\Forms;
use App\Models\User;
use Filament\Tables;
use App\Models\Server;
use Filament\Tables\Table;
use Filament\Resources\Resource;
use Illuminate\Support\HtmlString;
use Illuminate\Database\Eloquent\Builder;
use App\Actions\Server\SynchronizeServerAction;
use App\Filament\Resources\ServerResource\Pages;
use App\Filament\Resources\Users\UserResource;
use App\Filament\Resources\ServerResource\RelationManagers;

class ServerResource extends Resource
{
    protected static ?string $model = Server::class;

    protected static string | \BackedEnum | null $navigationIcon = 'heroicon-o-server';

    protected static string | \UnitEnum | null $navigationGroup = 'Server management';

    protected static ?string $recordTitleAttribute = 'name';

    public static function getGloballySearchableAttributes(): array
    {
        return ['name', 'ip', 'internal_ip', 'id'];
    }

    public static function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('name')
                    ->required()
                    ->label(__('Name'))
                    ->columnSpan(2),
                TextInput::make('ip')
                    ->required()
                    ->label('IP address')
                    ->columnSpan(2),
                TextInput::make('internal_ip')
                    ->required()
                    ->label('Internal IP address')
                    ->columnSpan(2),
                TextInput::make('maximum_sites')
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
                TextColumn::make('name')
                    ->label(__('Name'))
                    ->searchable(),
                TextColumn::make('status')
                    ->label(__('Status'))
                    ->badge()
                    ->formatStateUsing(fn (string $state) => match ($state) {
                        Server::STATUS_BUSY => __('Busy'),
                        Server::STATUS_ACTIVE => __('Active'),
                        default => __('Unknown status')
                    })
                    ->colors([
                        'warning' => Server::STATUS_BUSY,
                        'success' => Server::STATUS_ACTIVE,
                    ]),
                TextColumn::make('users')
                    ->label(__('Users'))
                    ->wrap()
                    ->formatStateUsing(function (Server $record) {
                        $state = $record
                            ->users
                            ->map(function (User $user) {
                                return '<a href="' . UserResource::getUrl('edit', ['record' => $user]) . '" class="text-primary-600" style="white-space: nowrap">' . $user->name . '</a>';
                            })
                            ->implode(', ') ?: '-';

                        return new HtmlString($state);
                    })
                    ->searchable(query: function (Builder $query, string $search) {
                        return $query->whereHas('users', function (Builder $query) use ($search) {
                            return $query
                                ->where('name', 'LIKE', "%{$search}%")
                                ->orWhere('email', 'LIKE', "%{$search}%");
                        });
                    }),
                TextColumn::make('maximum_sites')
                    ->label(__('Max sites'))
                    ->formatStateUsing(fn (Server $record) => $record->maximum_sites . " (Current: {$record->sites_count})")
                    ->counts('sites'),
                TextColumn::make('ip')
                    ->label(__('IP')),
                TextColumn::make('created_at')
                    ->label(__('Date'))
                    ->dateTime(),
            ])
            ->filters([
                //
            ])
            ->recordActions([
                EditAction::make(),
                Action::make('synchronize_server')
                    ->label(__('Synchronize'))
                    ->tooltip(__('This will synchronize the latest data from this provider to your Ploi Core installation'))
                    ->icon('heroicon-o-arrow-path')
                    ->action(fn (Server $record) => app(SynchronizeServerAction::class)->execute($record->ploi_id))
                    ->visible(fn (Server $record) => $record->status === Server::STATUS_ACTIVE),
                DeleteAction::make(),
            ])
            ->toolbarActions([
                DeleteBulkAction::make(),
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
            UsersRelationManager::class,
            SitesRelationManager::class,
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => ListServers::route('/'),
            'edit' => EditServer::route('/{record}/edit'),
            'synchronize' => SynchronizeServers::route('/synchronize'),
        ];
    }
}
