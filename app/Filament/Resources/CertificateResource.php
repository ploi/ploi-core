<?php

namespace App\Filament\Resources;

use App\Filament\Resources\CertificateResource\Pages;
use App\Models\Certificate;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\HtmlString;

class CertificateResource extends Resource
{
    protected static ?string $model = Certificate::class;

    protected static ?string $navigationIcon = 'heroicon-o-chat-bubble-bottom-center-text';

    protected static ?string $navigationGroup = 'Site management';

    protected static ?int $navigationSort = 2;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('site.name'),
                Forms\Components\TextInput::make('server_id'),
                Forms\Components\TextInput::make('status'),
                Forms\Components\TextInput::make('ploi_id'),
                Forms\Components\TextInput::make('domain'),
                Forms\Components\Textarea::make('certificate'),
                Forms\Components\Textarea::make('private'),
                Forms\Components\TextInput::make('type'),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('server.name')
                    ->searchable()
                    ->label(__('Server')),
                Tables\Columns\TextColumn::make('site.domain')
                    ->searchable()
                    ->label(__('Main domain')),
                Tables\Columns\TextColumn::make('type')
                    ->label('Type'),
                Tables\Columns\TextColumn::make('status')
                    ->badge()
                    ->formatStateUsing(fn(string $state) => match ($state) {
                        Certificate::STATUS_BUSY => __('Busy'),
                        Certificate::STATUS_ACTIVE => __('Active'),
                    })
                    ->colors([
                        'warning' => Certificate::STATUS_BUSY,
                        'success' => Certificate::STATUS_ACTIVE,
                    ])
                    ->label(__('Status')),
                Tables\Columns\TextColumn::make('domain')
                    ->searchable()
                    ->wrap()
                    ->getStateUsing(function (Certificate $record) {
                        $state = str($record->domain)->explode(',')->implode(', ');

                        return new HtmlString($state);
                    })
                    ->label('Domains & aliases'),
                Tables\Columns\TextColumn::make('created_at')
                    ->label(__('Date'))
                    ->sortable()
                    ->dateTime(),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\DeleteBulkAction::make(),
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
            'index' => Pages\ListCertificates::route('/'),
        ];
    }
}
