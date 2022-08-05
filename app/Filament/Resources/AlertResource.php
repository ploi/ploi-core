<?php

namespace App\Filament\Resources;

use App\Filament\Resources\AlertResource\Pages;
use App\Models\Alert;
use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\MarkdownEditor;
use Filament\Forms\Components\Select;
use Filament\Resources\Form;
use Filament\Resources\Resource;
use Filament\Resources\Table;
use Filament\Tables\Columns\BadgeColumn;
use Filament\Tables\Columns\TextColumn;
use Illuminate\Support\HtmlString;
use Illuminate\Support\Str;

class AlertResource extends Resource
{
    protected static ?string $model = Alert::class;

    protected static ?string $navigationIcon = 'heroicon-o-bell';

    protected static ?string $navigationGroup = 'Settings';

    protected static ?int $navigationSort = 4;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                MarkdownEditor::make('message')
                    ->label(__('Content'))
                    ->columnSpan(2)
                    ->required(),
                Select::make('type')
                    ->label(__('Type'))
                    ->options([
                        Alert::TYPE_INFO => __('Informational'),
                        Alert::TYPE_WARNING => __('Warning'),
                        Alert::TYPE_DANGER => __('Danger'),
                    ])
                    ->required(),
                DateTimePicker::make('expires_at')
                    ->label(__('Expires at'))
                    ->withoutSeconds(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('message')
                    ->label(__('Content'))
                    ->formatStateUsing(fn (?string $state) => new HtmlString(Str::markdown($state))),
                BadgeColumn::make('type')
                    ->label(__('Type'))
                    ->enum([
                        Alert::TYPE_INFO => __('Informational'),
                        Alert::TYPE_WARNING => __('Warning'),
                        Alert::TYPE_DANGER => __('Danger'),
                    ])
                    ->colors([
                        'success' => Alert::TYPE_INFO,
                        'warning' => Alert::TYPE_WARNING,
                        'danger' => Alert::TYPE_DANGER,
                    ]),
                TextColumn::make('expires_at')
                    ->label('Expires Date')
                    ->formatStateUsing(fn (?string $state) => filled($state) ? $state : '-'),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListAlerts::route('/'),
            'create' => Pages\CreateAlert::route('/create'),
            'edit' => Pages\EditAlert::route('/{record}/edit'),
        ];
    }

    public static function getGloballySearchableAttributes(): array
    {
        return [];
    }
}
