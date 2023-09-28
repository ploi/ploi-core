<?php

namespace App\Filament\Resources;

use Filament\Forms;
use Filament\Tables;
use App\Models\Package;
use Filament\Forms\Form;
use Filament\Tables\Table;
use Filament\Resources\Resource;
use App\Filament\Resources\PackageResource\Pages;
use App\Filament\Resources\PackageResource\RelationManagers;
use Illuminate\Support\HtmlString;

class PackageResource extends Resource
{
    protected static ?string $model = Package::class;

    protected static ?string $navigationIcon = 'heroicon-o-swatch';

    protected static ?int $navigationSort = 3;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('name')
                    ->label(__('Name'))
                    ->required()
                    ->columnSpan(2),
                Forms\Components\TextInput::make('maximum_sites')
                    ->helperText(__('Set to 0 for unlimited'))
                    ->integer()
                    ->required(),
                Forms\Components\TextInput::make('maximum_servers')
                    ->helperText(__('Set to 0 for unlimited'))
                    ->integer()
                    ->required(),
                Forms\Components\TextInput::make('stripe_plan_id')
                    ->helperText(new HtmlString(__('Enter the pricing ID from Stripe here') . ' - <a href="https://docs.ploi-core.io/263-digging-deeper/743-using-stripe" target="ploi-docs-stripe" class="text-primary-500">How does this work?</a>'))
                    ->label(__('Stripe ID'))
                    ->columnSpan(2),
                Forms\Components\TextInput::make('price_monthly')
                    ->label(__('Monthly price'))
                    ->helperText(__('Fill this in if you want it to be monthly payments'))
                    ->required(),
                Forms\Components\TextInput::make('price_yearly')
                    ->label(__('Yearly price'))
                    ->helperText(__('Fill this in if you want it to be yearly payments'))
                    ->required(),
                Forms\Components\Select::make('currency')
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
                        'nz' => 'NZD $ (New Zealand Dollar)',
                    ])
                    ->required(),
                Forms\Components\Grid::make()
                    ->schema([
                        Forms\Components\Section::make(__('Server permissions'))
                            ->schema([
                                Forms\Components\Checkbox::make('server_permissions.create')
                                    ->reactive()
                                    ->label('Allow server creation')
                                    ->helperText('This will allow users to create servers'),
                                Forms\Components\Checkbox::make('server_permissions.update')
                                    ->label('Allow server updates')
                                    ->helperText('This will allow users to update servers'),
                                Forms\Components\Checkbox::make('server_permissions.delete')
                                    ->label('Allow server deletion')
                                    ->helperText('This will allow users to delete servers'),
                            ])
                            ->columnSpan(1),
                        Forms\Components\Section::make(__('Site permissions'))
                            ->schema([
                                Forms\Components\Checkbox::make('site_permissions.create')
                                    ->label('Allow site creation')
                                    ->helperText('This will allow users to create sites'),
                                Forms\Components\Checkbox::make('site_permissions.update')
                                    ->label('Allow site updates')
                                    ->helperText('This will allow users to update sites'),
                                Forms\Components\Checkbox::make('site_permissions.delete')
                                    ->label('Allow site deletion')
                                    ->helperText('This will allow users to delete sites'),
                            ])
                            ->columnSpan(1),
                    ]),

                Forms\Components\Grid::make()
                    ->schema([
                        Forms\Components\Section::make(__('Available server providers'))
                            ->description(__('These server providers will be available for users that are attached to this package.'))
                            ->schema([
                                Forms\Components\CheckboxList::make('providers')
                                    ->relationship('providers', 'name')
                            ])
                            ->columnSpan(1)
                    ])
                    ->visible(function ($get) {
                        return $get('server_permissions')['create'];
                    })
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('id')
                    ->label('ID')
                    ->searchable(),
                Tables\Columns\TextColumn::make('name')
                    ->label(__('Name'))
                    ->description(function (Package $record) {
                        if (!$record->stripe_plan_id) {
                            return __('Not attached to Stripe.');
                        }

                        return "Attached to stripe - {$record->price_monthly} {$record->currency}";
                    }),
                Tables\Columns\TextColumn::make('maximum_sites')
                    ->formatStateUsing(fn (int $state) => $state === 0 ? __('Unlimited') : $state)
                    ->label(__('Maximum sites')),
                Tables\Columns\TextColumn::make('maximum_servers')
                    ->formatStateUsing(fn (int $state) => $state === 0 ? __('Unlimited') : $state)
                    ->label(__('Maximum servers')),
                Tables\Columns\TextColumn::make('users_count')
                    ->counts('users'),
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
