<?php

namespace App\Filament\Resources;

use App\Filament\Resources\PackageResource\Pages;
use App\Filament\Resources\PackageResource\RelationManagers;
use App\Models\Package;
use App\Models\Provider;
use App\Models\ProviderPlan;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Notifications\Notification;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
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
                            ->icon(ServerResource::getNavigationIcon())
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
                            ->icon(SiteResource::getNavigationIcon())
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
                            ->icon(ProviderResource::getNavigationIcon())
                            ->schema([
                                Forms\Components\CheckboxList::make('providers')
                                    ->relationship('providers', 'name')
                                    ->reactive(),
                                Forms\Components\Grid::make(1)
                                    ->schema([
                                        Forms\Components\Actions::make([
                                            Forms\Components\Actions\Action::make('manage_provider_plans')
                                                ->label(__('Manage provider plans'))
                                                ->icon('heroicon-o-adjustments-horizontal')
                                                ->form(function (Package $record) {
                                                    return $record->providers->sortBy('name')->map(function (Provider $provider) {
                                                        return Forms\Components\Section::make($provider->label)
                                                            ->description(__('Select the plans that should be available for this provider on this package.'))
                                                            ->icon(ProviderResource::getNavigationIcon())
                                                            ->statePath($provider->id)
                                                            ->schema([
                                                                Forms\Components\Toggle::make('select_specific_provider_plans')
                                                                    ->label(__('Select subset'))
                                                                    ->helperText(__('Check this box if you want to limit the provider plans available on this package.'))
                                                                    ->default(false)
                                                                    ->reactive()
                                                                    ->afterStateUpdated(function (Forms\Components\Toggle $component, Forms\Set $set) use ($provider) {
                                                                        $set(
                                                                            path: "provider_plans",
                                                                            state: $component->getState() ? $provider->plans->pluck('id') : [],
                                                                        );
                                                                    }),
                                                                Forms\Components\CheckboxList::make("provider_plans")
                                                                    ->label(__('Select plans'))
                                                                    ->options(fn() => $provider->plans->mapWithKeys(fn(ProviderPlan $providerPlan) => [$providerPlan->id => $providerPlan->label ?? $providerPlan->plan_id])->all())
                                                                    ->visible(fn(Forms\Get $get) => $get('select_specific_provider_plans'))
                                                                    ->reactive()
                                                                    ->bulkToggleable()
                                                                    ->columns(2)
                                                            ])
                                                            ->collapsible();
                                                    })->all();
                                                })
                                                ->fillForm(function (Package $record) {
                                                    return $record->providers->mapWithKeys(function (Provider $provider) use ($record) {
                                                        $providerPlanIds = $record->providerPlans()->whereBelongsTo($provider)->pluck('provider_plans.id');

                                                        return [$provider->id => [
                                                            'select_specific_provider_plans' => $providerPlanIds->isNotEmpty(),
                                                            'provider_plans' => $providerPlanIds->all(),
                                                        ]];
                                                    })->all();
                                                })
                                                ->action(function (Package $record, array $data) {
                                                    $providerPlanIds = collect($data)
                                                        // If `select_specific_provider_plans`, all provider plans are available. It could be that this
                                                        // option was deselected, and that we have some left over provider plans in the field that
                                                        // is now hidden. We will not include theSE IDs so that they ARE detached automatically.
                                                        ->where('select_specific_provider_plans', true)
                                                        ->pluck('provider_plans')
                                                        ->flatten();

                                                    // Detaches provider plans not specifically selected.
                                                    $record->providerPlans()->sync($providerPlanIds);

                                                    Notification::make()
                                                        ->title(__('Provider plans saved'))
                                                        ->success()
                                                        ->send();
                                                })
                                                ->modalSubmitActionLabel(__('Save'))
                                                ->color('gray')
                                                ->disabled(function (Package $record, Forms\Get $get) {
                                                    $providers = collect($get('providers'))
                                                        ->map(fn(string $id): int => (int)$id)
                                                        ->sort();

                                                    return $record->providers->pluck('id')->map(fn(string $id): int => (int)$id)->sort()->toArray() !== $providers->all();
                                                })
                                        ]),
                                        Forms\Components\Placeholder::make('save_warning')
                                            ->content(__('You\'ve changed the available server providers. Please save your changes before you can manage the provider plans.'))
                                            ->visible(function (Pages\EditPackage $livewire, Forms\Get $get) {
                                                /** @var Package $package */
                                                $package = $livewire->getRecord();

                                                $providers = collect($get('providers'))
                                                    ->map(fn(string $id): int => (int)$id)
                                                    ->sort();

                                                return $package->providers->pluck('id')->map(fn(string $id): int => (int)$id)->sort()->toArray() !== $providers->all();
                                            })
                                            ->hiddenLabel(),
                                    ])
                                    ->hiddenOn('create'),
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
