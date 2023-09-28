<?php

namespace App\Filament\Resources;

use Filament\Tables;
use Filament\Forms\Form;
use Filament\Tables\Table;
use Filament\Resources\Resource;
use Laravel\Cashier\Subscription;
use App\Filament\Resources\SubscriptionResource\Pages;

class SubscriptionResource extends Resource
{
    protected static ?string $model = Subscription::class;

    protected static ?string $navigationIcon = 'heroicon-o-banknotes';

    protected static ?int $navigationSort = 4;

    public static function getSlug(): string
    {
        return 'subscriptions';
    }

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                //
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('user.name')
                    ->searchable()
                    ->url(fn ($record) => UserResource::getUrl('edit', ['record' => $record])),
                Tables\Columns\TextColumn::make('stripe_id')->searchable(),
                Tables\Columns\TextColumn::make('stripe_plan')->searchable(),
                Tables\Columns\TextColumn::make('stripe_status')
                    ->label('Status')
                    ->badge()
                    ->colors([
                        'success' => \Stripe\Subscription::STATUS_ACTIVE,
                        'warning' => \Stripe\Subscription::STATUS_PAST_DUE,
                    ]),
                Tables\Columns\TextColumn::make('created_at')
                    ->sortable()
                    ->dateTime()
                    ->label(__('Date'))
            ])
            ->filters([
                //
            ])
            ->actions([
//                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\DeleteBulkAction::make(),
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
            'index' => Pages\ListSubscriptions::route('/'),
//            'create' => Pages\CreateSubscription::route('/create'),
//            'edit' => Pages\EditSubscription::route('/{record}/edit'),
        ];
    }
}
