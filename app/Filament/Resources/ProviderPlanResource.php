<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ProviderPlanResource\Pages;
use App\Filament\Resources\ProviderPlanResource\RelationManagers;
use App\Models\ProviderPlan;
use Filament\Forms;
use Filament\Resources\Form;
use Filament\Resources\Resource;
use Filament\Resources\Table;
use Filament\Tables;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class ProviderPlanResource extends Resource
{
    protected static ?string $model = ProviderPlan::class;

    protected static ?string $navigationIcon = 'heroicon-o-collection';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('provider_id'),
                Forms\Components\TextInput::make('plan_id')
                    ->maxLength(255),
                Forms\Components\TextInput::make('label')
                    ->maxLength(255),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('provider_id'),
                Tables\Columns\TextColumn::make('plan_id'),
                Tables\Columns\TextColumn::make('label'),
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime(),
                Tables\Columns\TextColumn::make('updated_at')
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
            ]);
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
            'create' => Pages\CreateProviderPlan::route('/create'),
            'edit' => Pages\EditProviderPlan::route('/{record}/edit'),
        ];
    }    
}
