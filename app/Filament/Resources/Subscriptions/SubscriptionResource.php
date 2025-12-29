<?php

namespace App\Filament\Resources\Subscriptions;

use Filament\Panel;
use Filament\Schemas\Schema;
use Filament\Tables\Columns\TextColumn;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use App\Filament\Resources\Subscriptions\Pages\ListSubscriptions;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Resources\Resource;
use Laravel\Cashier\Subscription;
use App\Filament\Resources\SubscriptionResource\Pages;

class SubscriptionResource extends Resource
{
    protected static ?string $model = Subscription::class;

    protected static string | \BackedEnum | null $navigationIcon = 'heroicon-o-banknotes';

    protected static ?int $navigationSort = 4;

    public static function getSlug(?Panel $panel = null): string
    {
        return 'subscriptions';
    }

    public static function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                //
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('user.name')
                    ->searchable()
                    ->url(fn ($record) => UserResource::getUrl('edit', ['record' => $record])),
                TextColumn::make('stripe_id')->searchable(),
                TextColumn::make('stripe_plan')->searchable(),
                TextColumn::make('stripe_status')
                    ->label('Status')
                    ->badge()
                    ->colors([
                        'success' => \Stripe\Subscription::STATUS_ACTIVE,
                        'warning' => \Stripe\Subscription::STATUS_PAST_DUE,
                    ]),
                TextColumn::make('created_at')
                    ->sortable()
                    ->dateTime()
                    ->label(__('Date'))
            ])
            ->filters([
                //
            ])
            ->recordActions([
//                Tables\Actions\EditAction::make(),
                DeleteAction::make(),
            ])
            ->toolbarActions([
                DeleteBulkAction::make(),
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
            'index' => ListSubscriptions::route('/'),
//            'create' => Pages\CreateSubscription::route('/create'),
//            'edit' => Pages\EditSubscription::route('/{record}/edit'),
        ];
    }
}
