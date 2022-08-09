<?php

namespace App\Filament\Resources;

use App\Filament\Resources\PackageResource\Pages;
use App\Filament\Resources\PackageResource\RelationManagers;
use App\Models\Package;
use Filament\Forms\Components\Checkbox;
use Filament\Forms\Components\Grid;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Resources\Form;
use Filament\Resources\Resource;
use Filament\Resources\Table;
use Filament\Tables;

class PackageResource extends Resource
{
    protected static ?string $model = Package::class;

    protected static ?string $navigationIcon = 'heroicon-o-color-swatch';

    protected static ?int $navigationSort = 3;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('name')
                    ->label(__('Name'))
                    ->required()
                    ->columnSpan(2),
                TextInput::make('maximum_sites')
                    ->helperText(__('Set to 0 for unlimited'))
                    ->integer()
                    ->required(),
                TextInput::make('maximum_servers')
                    ->helperText(__('Set to 0 for unlimited'))
                    ->integer()
                    ->required(),
                TextInput::make('plan_id')
                    ->helperText(__('Enter the pricing ID from Stripe here') . ' - <a href="https://docs.ploi-core.io/digging-deeper/using-stripe" target="ploi-docs-stripe" class="text-primary-500">How does this work?</a>')
                    ->label(__('Stripe ID'))
                    ->columnSpan(2),
                TextInput::make('price_monthly')
                    ->numeric()
                    ->label(__('Monthly price'))
                    ->helperText(__('Fill this in if you want it to be monthly payments'))
                    ->required(),
                TextInput::make('price_yearly')
                    ->numeric()
                    ->label(__('Yearly price'))
                    ->helperText(__('Fill this in if you want it to be yearly payments'))
                    ->required(),
                Select::make('currency')
                    ->label(__('Currency'))
                    ->options([
                        'usd' => 'USD $',
                        'eur' => 'Euro €',
                        'gbp' => 'GBP £',
                        'nok' => 'NOK (Norwegian Krone)',
                        'aud' => 'AUD (Australian dollar)',
                        'cad' => 'CAD (Canadian dollar)',
                        'inr' => 'INR (Indian ₹ rupee)',
                        'thb' => 'THB (Thai Baht)',
                        'brl' => 'BRL R$ (Brazilian Real)',
                    ])
                    ->required(),
                Grid::make()
                    ->schema([
                        Section::make(__('Server permissions'))
                            ->schema([
                                Checkbox::make('server_permissions.create')
                                    ->label('Allow server creation')
                                    ->helperText('This will allow users to create servers'),
                                Checkbox::make('server_permissions.update')
                                    ->label('Allow server updates')
                                    ->helperText('This will allow users to update servers'),
                                Checkbox::make('server_permissions.delete')
                                    ->label('Allow server deletion')
                                    ->helperText('This will allow users to delete servers'),
                            ])
                            ->columnSpan(1),
                        Section::make(__('Site permissions'))
                            ->schema([
                                Checkbox::make('site_permissions.create')
                                    ->label('Allow site creation')
                                    ->helperText('This will allow users to create sites'),
                                Checkbox::make('site_permissions.update')
                                    ->label('Allow site updates')
                                    ->helperText('This will allow users to update sites'),
                                Checkbox::make('site_permissions.delete')
                                    ->label('Allow site deletion')
                                    ->helperText('This will allow users to delete sites'),
                            ])
                            ->columnSpan(1),
                    ]),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name')
                    ->label(__('Name'))
                    ->description(function (Package $record) {
                        if (!$record->plan_id) {
                            return __('Not attached to Stripe.');
                        }

                        return "Attached to stripe - {$record->price_monthly} {$record->currency}";
                    }),
                Tables\Columns\TextColumn::make('maximum_sites')
                    ->formatStateUsing(fn(int $state) => $state === 0 ? __('Unlimited') : $state)
                    ->label(__('Maximum sites')),
                Tables\Columns\TextColumn::make('maximum_servers')
                    ->formatStateUsing(fn(int $state) => $state === 0 ? __('Unlimited') : $state)
                    ->label(__('Maximum servers')),
                Tables\Columns\TextColumn::make('users_count')
                    ->counts('users'),
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
            RelationManagers\UsersRelationManager::class,
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListPackages::route('/'),
            'create' => Pages\CreatePackage::route('/create'),
            'edit' => Pages\EditPackage::route('/{record}/edit'),
        ];
    }
}
