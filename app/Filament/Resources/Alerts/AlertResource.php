<?php

namespace App\Filament\Resources\Alerts;

use Filament\Schemas\Schema;
use Filament\Forms\Components\MarkdownEditor;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\DateTimePicker;
use Filament\Tables\Columns\TextColumn;
use App\Filament\Resources\Alerts\Pages\ListAlerts;
use App\Filament\Resources\Alerts\Pages\CreateAlert;
use App\Filament\Resources\Alerts\Pages\EditAlert;
use Filament\Forms;
use Filament\Tables;
use App\Models\Alert;
use Filament\Tables\Table;
use Illuminate\Support\Str;
use Filament\Resources\Resource;
use Illuminate\Support\HtmlString;
use App\Filament\Resources\AlertResource\Pages;

class AlertResource extends Resource
{
    protected static ?string $model = Alert::class;

    protected static string | \BackedEnum | null $navigationIcon = 'heroicon-o-bell';

    protected static string | \UnitEnum | null $navigationGroup = 'Settings';

    protected static ?int $navigationSort = 4;

    protected static ?string $recordTitleAttribute = 'message';

    public static function form(Schema $schema): Schema
    {
        return $schema
            ->components([
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
                    ->seconds(false),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('message')
                    ->label(__('Content'))
                    ->formatStateUsing(fn (?string $state) => new HtmlString(Str::markdown($state))),
                TextColumn::make('type')
                    ->label(__('Type'))
                    ->badge()
                    ->formatStateUsing(fn (string $state) => match ($state) {
                        Alert::TYPE_INFO => __('Informational'),
                        Alert::TYPE_WARNING => __('Warning'),
                        Alert::TYPE_DANGER => __('Danger'),
                        default => __('Unknown status')
                    })
                    ->colors([
                        'primary' => Alert::TYPE_INFO,
                        'warning' => Alert::TYPE_WARNING,
                        'danger' => Alert::TYPE_DANGER,
                    ]),
                TextColumn::make('expires_at')
                    ->label('Expires')
                    ->default('-'),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => ListAlerts::route('/'),
            'create' => CreateAlert::route('/create'),
            'edit' => EditAlert::route('/{record}/edit'),
        ];
    }

    public static function getGloballySearchableAttributes(): array
    {
        return [];
    }
}
