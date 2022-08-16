<?php

namespace App\Filament\Resources;

use Filament\Resources\Form;
use App\Models\SupportTicket;
use Filament\Resources\Table;
use Filament\Resources\Resource;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\BadgeColumn;
use Illuminate\Database\Eloquent\Builder;
use Filament\Tables\Filters\MultiSelectFilter;
use App\Filament\Resources\SupportTicketResource\Pages;

class SupportTicketResource extends Resource
{
    protected static ?string $model = SupportTicket::class;

    protected static ?string $navigationGroup = 'Support';

    protected static ?string $navigationIcon = 'heroicon-o-support';

    protected static ?string $label = 'Ticker';

    protected static ?string $pluralLabel = 'Tickets';

    protected static function shouldRegisterNavigation(): bool
    {
        return (bool) setting('support');
    }

    protected static function getNavigationBadge(): ?string
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
                BadgeColumn::make('status')
                    ->label(__('Status'))
                    ->enum([
                        SupportTicket::STATUS_OPEN => __('Open'),
                        SupportTicket::STATUS_CLOSED => __('Closed'),
                        SupportTicket::STATUS_CUSTOMER_REPLY => __('Customer Reply'),
                        SupportTicket::STATUS_SUPPORT_REPLY => __('Support Reply'),
                    ])
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
                MultiSelectFilter::make('status')
                    ->label(__('Status'))
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
