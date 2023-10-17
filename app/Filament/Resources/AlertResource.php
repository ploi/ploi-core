<?php

namespace App\Filament\Resources;

use Filament\Forms;
use Filament\Tables;
use App\Models\Alert;
use Filament\Forms\Form;
use Filament\Tables\Table;
use Illuminate\Support\Str;
use Filament\Resources\Resource;
use Illuminate\Support\HtmlString;
use App\Filament\Resources\AlertResource\Pages;

class AlertResource extends Resource
{
    protected static ?string $model = Alert::class;

    protected static ?string $navigationIcon = 'heroicon-o-bell';

    protected static ?string $navigationGroup = 'Settings';

    protected static ?int $navigationSort = 4;

    protected static ?string $recordTitleAttribute = 'message';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\MarkdownEditor::make('message')
                    ->label(__('Content'))
                    ->columnSpan(2)
                    ->required(),
                Forms\Components\Select::make('type')
                    ->label(__('Type'))
                    ->options([
                        Alert::TYPE_INFO => __('Informational'),
                        Alert::TYPE_WARNING => __('Warning'),
                        Alert::TYPE_DANGER => __('Danger'),
                    ])
                    ->required(),
                Forms\Components\DateTimePicker::make('expires_at')
                    ->label(__('Expires at'))
                    ->seconds(false),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('message')
                    ->label(__('Content'))
                    ->formatStateUsing(fn (?string $state) => new HtmlString(Str::markdown($state))),
                Tables\Columns\TextColumn::make('type')
                    ->label(__('Type'))
                    ->badge()
                    ->formatStateUsing(fn (string $state) => match ($state) {
                        Alert::TYPE_INFO => __('Informational'),
                        Alert::TYPE_WARNING => __('Warning'),
                        Alert::TYPE_DANGER => __('Danger'),
                    })
                    ->colors([
                        'primary' => Alert::TYPE_INFO,
                        'warning' => Alert::TYPE_WARNING,
                        'danger' => Alert::TYPE_DANGER,
                    ]),
                Tables\Columns\TextColumn::make('expires_at')
                    ->label('Expires')
                    ->default('-'),
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
