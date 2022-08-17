<?php

namespace App\Filament\Resources;

use Filament\Forms\Components\TextInput;
use Filament\Tables;
use App\Models\Provider;
use App\Models\ProviderPlan;
use Filament\Resources\Form;
use Filament\Resources\Table;
use Filament\Resources\Resource;
use App\Filament\Resources\ProviderPlanResource\Pages;

class ProviderPlanResource extends Resource
{
    protected static ?string $model = ProviderPlan::class;

    protected static ?string $navigationIcon = 'heroicon-o-cube';

    protected static ?string $navigationGroup = 'Providers';

    protected static ?int $navigationSort = 2;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('label'),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('id')->label('ID')->searchable(),
                Tables\Columns\TextColumn::make('provider.name')
                    ->label(__('Provider'))
                    ->searchable(),
                Tables\Columns\TextColumn::make('plan_id')
                    ->label(__('Plan ID'))
                    ->searchable(),
                Tables\Columns\TextColumn::make('label')
                    ->label(__('Label'))
                    ->searchable(),
                Tables\Columns\TextColumn::make('created_at')
                    ->label(__('Date'))
                    ->sortable()
                    ->dateTime(),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('provider_id')
                    ->label(__('Provider'))
                    ->options(fn () => Provider::orderBy('name')->get()->mapWithKeys(fn (Provider $provider) => [$provider->id => $provider->name])),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                //
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
            'index' => Pages\ListProviderPlans::route('/'),
        ];
    }
}
