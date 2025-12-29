<?php

namespace App\Filament\Resources\SupportTickets;

use Filament\Schemas\Schema;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\SelectFilter;
use App\Filament\Resources\SupportTickets\Pages\ListSupportTickets;
use App\Filament\Resources\SupportTickets\Pages\ViewSupportTicket;
use Filament\Tables;
use Filament\Tables\Table;
use App\Models\SupportTicket;
use Filament\Resources\Resource;
use Illuminate\Database\Eloquent\Builder;
use App\Filament\Resources\SupportTicketResource\Pages;

class SupportTicketResource extends Resource
{
    protected static ?string $model = SupportTicket::class;

    protected static string | \UnitEnum | null $navigationGroup = 'Support';

    protected static string | \BackedEnum | null $navigationIcon = 'heroicon-o-lifebuoy';

    protected static ?string $label = 'Ticket';

    protected static ?string $pluralLabel = 'Tickets';

    public static function shouldRegisterNavigation(): bool
    {
        return (bool)setting('support');
    }

    public static function getNavigationBadge(): ?string
    {
        return static::getEloquentQuery()->count();
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
                TextColumn::make('status')
                    ->label(__('Status'))
                    ->badge()
                    ->formatStateUsing(fn (string $state) => match ($state) {
                        SupportTicket::STATUS_OPEN => __('Open'),
                        SupportTicket::STATUS_CLOSED => __('Closed'),
                        SupportTicket::STATUS_CUSTOMER_REPLY => __('Customer Reply'),
                        SupportTicket::STATUS_SUPPORT_REPLY => __('Support Reply'),
                        default => __('Unknown status')
                    })
                    ->colors([
                        'primary' => [SupportTicket::STATUS_OPEN, SupportTicket::STATUS_SUPPORT_REPLY, SupportTicket::STATUS_CUSTOMER_REPLY],
                        'danger' => SupportTicket::STATUS_CLOSED,
                    ])
                    ->wrap(false),
                TextColumn::make('title')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('replies_count')
                    ->label(__('Replies'))
                    ->getStateUsing(fn (SupportTicket $record) => $record->replies->count()),
                TextColumn::make('user.name')
                    ->searchable()
                    ->sortable(),
            ])
            ->filters([
                SelectFilter::make('status')
                    ->label(__('Status'))
                    ->multiple()
                    ->options([
                        SupportTicket::STATUS_OPEN => __('Open'),
                        SupportTicket::STATUS_CLOSED => __('Closed'),
                        SupportTicket::STATUS_CUSTOMER_REPLY => __('Customer Reply'),
                        SupportTicket::STATUS_SUPPORT_REPLY => __('Support Reply'),
                    ])
                    ->default([
                        SupportTicket::STATUS_CUSTOMER_REPLY,
                        SupportTicket::STATUS_OPEN,
                    ]),
            ]);
    }

    public static function getEloquentQuery(): Builder
    {
        return parent::getEloquentQuery()
            ->with(['user', 'replies'])
            ->orderByDesc('updated_at');
    }

    public static function getPages(): array
    {
        return [
            'index' => ListSupportTickets::route('/'),
            'view' => ViewSupportTicket::route('/{record}'),
        ];
    }
}
