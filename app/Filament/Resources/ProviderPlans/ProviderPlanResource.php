<?php

namespace App\Filament\Resources\ProviderPlans;

use Filament\Schemas\Schema;
use Filament\Forms\Components\TextInput;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Actions\EditAction;
use App\Filament\Resources\ProviderPlans\Pages\ListProviderPlans;
use Filament\Forms;
use Filament\Tables;
use App\Models\Provider;
use Filament\Tables\Table;
use App\Models\ProviderPlan;
use Filament\Resources\Resource;
use App\Filament\Resources\ProviderPlanResource\Pages;

class ProviderPlanResource extends Resource
{
    protected static ?string $model = ProviderPlan::class;

    protected static string | \BackedEnum | null $navigationIcon = 'heroicon-o-cube';

    protected static string | \UnitEnum | null $navigationGroup = 'Providers';

    protected static ?int $navigationSort = 2;

    public static function form(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('label'),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('id')
                    ->label('ID')
                    ->searchable(),
                TextColumn::make('provider.name')
                    ->label(__('Provider'))
                    ->searchable(),
                TextColumn::make('plan_id')
                    ->label(__('Plan ID'))
                    ->searchable(),
                TextColumn::make('label')
                    ->label(__('Label'))
                    ->searchable(),
                TextColumn::make('created_at')
                    ->label(__('Date'))
                    ->sortable()
                    ->dateTime(),
            ])
            ->filters([
                SelectFilter::make('provider_id')
                    ->label(__('Provider'))
                    ->options(fn () => Provider::orderBy('name')->get()->mapWithKeys(fn (Provider $provider) => [$provider->id => $provider->name])),
            ])
            ->recordActions([
                EditAction::make(),
            ])
            ->toolbarActions([
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
            'index' => ListProviderPlans::route('/'),
        ];
    }
}
