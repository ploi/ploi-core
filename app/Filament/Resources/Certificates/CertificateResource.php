<?php

namespace App\Filament\Resources\Certificates;

use Filament\Schemas\Schema;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Tables\Columns\TextColumn;
use Filament\Actions\EditAction;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use App\Filament\Resources\Certificates\Pages\ListCertificates;
use Filament\Forms;
use Filament\Tables;
use Filament\Tables\Table;
use App\Models\Certificate;
use Filament\Resources\Resource;
use Illuminate\Support\HtmlString;
use Illuminate\Database\Eloquent\Builder;
use App\Filament\Resources\CertificateResource\Pages;

class CertificateResource extends Resource
{
    protected static ?string $model = Certificate::class;

    protected static string | \BackedEnum | null $navigationIcon = 'heroicon-o-chat-bubble-bottom-center-text';

    protected static string | \UnitEnum | null $navigationGroup = 'Site management';

    protected static ?int $navigationSort = 2;

    public static function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('site.name'),
                TextInput::make('server_id'),
                TextInput::make('status'),
                TextInput::make('ploi_id'),
                TextInput::make('domain'),
                Textarea::make('certificate'),
                Textarea::make('private'),
                TextInput::make('type'),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('server.name')
                    ->searchable()
                    ->label(__('Server')),
                TextColumn::make('site.domain')
                    ->searchable()
                    ->label(__('Main domain')),
                TextColumn::make('type')
                    ->label('Type'),
                TextColumn::make('status')
                    ->badge()
                    ->formatStateUsing(fn (string $state) => match ($state) {
                        Certificate::STATUS_BUSY => __('Busy'),
                        Certificate::STATUS_ACTIVE => __('Active'),
                        default => __('Unknown status')
                    })
                    ->colors([
                        'warning' => Certificate::STATUS_BUSY,
                        'success' => Certificate::STATUS_ACTIVE,
                    ])
                    ->label(__('Status')),
                TextColumn::make('domain')
                    ->searchable()
                    ->wrap()
                    ->getStateUsing(function (Certificate $record) {
                        $state = str($record->domain)->explode(',')->implode(', ');

                        return new HtmlString($state);
                    })
                    ->label('Domains & aliases'),
                TextColumn::make('created_at')
                    ->label(__('Date'))
                    ->sortable()
                    ->dateTime(),
            ])
            ->filters([
                //
            ])
            ->recordActions([
                EditAction::make(),
                DeleteAction::make(),
            ])
            ->toolbarActions([
                DeleteBulkAction::make(),
            ])
            ->defaultSort('created_at', 'desc');
    }

    public static function getEloquentQuery(): Builder
    {
        return parent::getEloquentQuery()
            ->orderBy('domain');
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
            'index' => ListCertificates::route('/'),
        ];
    }
}
