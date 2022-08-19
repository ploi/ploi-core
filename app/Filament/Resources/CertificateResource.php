<?php

namespace App\Filament\Resources;

use Filament\Forms;
use Filament\Tables;
use App\Models\Certificate;
use Filament\Resources\Form;
use Filament\Resources\Table;
use Filament\Resources\Resource;
use Illuminate\Database\Eloquent\Builder;
use App\Filament\Resources\CertificateResource\Pages;
use Illuminate\Support\HtmlString;

class CertificateResource extends Resource
{
    protected static ?string $model = Certificate::class;

    protected static ?string $navigationIcon = 'heroicon-o-annotation';

    protected static ?string $navigationGroup = 'Site management';

    protected static ?int $navigationSort = 2;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('site.name'),
                Forms\Components\TextInput::make('server_id'),
                Forms\Components\TextInput::make('status')
                    ->maxLength(255),
                Forms\Components\TextInput::make('ploi_id'),
                Forms\Components\TextInput::make('domain')
                    ->maxLength(255),
                Forms\Components\Textarea::make('certificate'),
                Forms\Components\Textarea::make('private'),
                Forms\Components\TextInput::make('type')
                    ->maxLength(255),
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
                Tables\Columns\BadgeColumn::make('status')
                    ->enum([
                        Certificate::STATUS_BUSY => __('Busy'),
                        Certificate::STATUS_ACTIVE => __('Active'),
                    ])
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
