<?php

namespace App\Filament\Resources;

use Filament\Tables;
use Filament\Forms\Form;
use Filament\Tables\Table;
use App\Models\SupportTicket;
use Filament\Resources\Resource;
use Illuminate\Database\Eloquent\Builder;
use App\Filament\Resources\SupportTicketResource\Pages;

class SupportTicketResource extends Resource
{
    protected static ?string $model = SupportTicket::class;

    protected static ?string $navigationGroup = 'Support';

    protected static ?string $navigationIcon = 'heroicon-o-lifebuoy';

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
                Tables\Columns\TextColumn::make('status')
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
                Tables\Columns\TextColumn::make('title')
                    ->searchable()
                    ->sortable(),
                Tables\Columns\TextColumn::make('replies_count')
                    ->label(__('Replies'))
                    ->getStateUsing(fn (SupportTicket $record) => $record->replies->count()),
                Tables\Columns\TextColumn::make('user.name')
                    ->searchable()
                    ->sortable(),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('status')
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
            'index' => Pages\ListSupportTickets::route('/'),
            'view' => Pages\ViewSupportTicket::route('/{record}'),
        ];
    }
}
