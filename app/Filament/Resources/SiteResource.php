<?php

namespace App\Filament\Resources;

use App\Actions\Site\SynchronizeSiteAction;
use App\Filament\Resources\SiteResource\Pages;
use App\Filament\Resources\SiteResource\RelationManagers;
use App\Models\Site;
use App\Models\User;
use Filament\Forms;
use Filament\Resources\Form;
use Filament\Resources\Resource;
use Filament\Resources\Table;
use Filament\Tables;
use Illuminate\Contracts\Database\Builder;
use Illuminate\Support\HtmlString;

class SiteResource extends Resource
{
    protected static ?string $model = Site::class;

    protected static ?string $navigationIcon = 'heroicon-o-code';

    protected static ?string $navigationGroup = 'Site management';

    protected static ?int $navigationSort = 0;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('domain')
                    ->label(__('Domain'))
                    ->required()
                    ->hostname()
                    ->unique(Site::class, column: 'domain', ignoreRecord: true)
                    ->columnSpan(2),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('domain')
                    ->description(function (Site $record) {
                        return "PHP $record->php_version";
                    })
                    ->label(__('Name'))
                    ->sortable()
                    ->searchable(),
                Tables\Columns\TextColumn::make('server.name')
                    ->label(__('Server')),
                Tables\Columns\BadgeColumn::make('status')
                    ->enum([
                        Site::STATUS_BUSY => __('Busy'),
                        Site::STATUS_ACTIVE => __('Active'),
                    ])
                    ->colors([
                        'warning' => Site::STATUS_BUSY,
                        'success' => Site::STATUS_ACTIVE,
                    ])
                    ->label(__('Status')),
                Tables\Columns\TextColumn::make('users')
                    ->label(__('Users'))
                    ->getStateUsing(function (Site $record) {
                        $state = $record
                            ->users
                            ->map(function (User $user) {
                                return '<a href="' . route('filament.resources.users.edit', ['record' => $user]) . '" class="text-primary-600">' . $user->name . '</a>';
                            })
                            ->implode(', ') ?: '-';

                        return new HtmlString($state);
                    }),
                Tables\Columns\TextColumn::make('created_at')
                    ->label(__('Date'))
                    ->dateTime(),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\Action::make('synchronize_site')
                    ->label(__('Synchronize'))
                    ->tooltip(__('This will synchronize the latest data from this provider to your Ploi Core installation'))
                    ->icon('heroicon-o-refresh')
                    ->action(function (Site $record) {
                        app(SynchronizeSiteAction::class)->execute($record->server->ploi_id, $record->ploi_id);
                    })
                    ->visible(fn (Site $record) => $record->status === Site::STATUS_ACTIVE),
            ])
            ->bulkActions([
                Tables\Actions\DeleteBulkAction::make(),
            ]);
    }

    public static function getEloquentQuery(): \Illuminate\Database\Eloquent\Builder
    {
        return parent::getEloquentQuery()
            ->with(['users', 'server']);
    }

    public static function getRelations(): array
    {
        return [
            RelationManagers\UsersRelationManager::class,
            RelationManagers\CertificatesRelationManager::class,
            RelationManagers\CronjobsRelationManager::class,
            RelationManagers\RedirectsRelationManager::class,
            RelationManagers\SystemUsersRelationManager::class,
        ];
    }

    public static function canCreate(): bool
    {
        return false;
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListSites::route('/'),
            'edit' => Pages\EditSite::route('/{record}/edit'),
            'synchronize' => Pages\SynchronizeSites::route('/synchronize'),
        ];
    }
}
