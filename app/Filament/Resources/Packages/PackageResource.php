<?php

namespace App\Filament\Resources\Packages;

use Filament\Schemas\Schema;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Select;
use Filament\Schemas\Components\Grid;
use Filament\Schemas\Components\Section;
use Filament\Forms\Components\Checkbox;
use Filament\Forms\Components\CheckboxList;
use Filament\Schemas\Components\Actions;
use Filament\Actions\Action;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Components\Utilities\Set;
use Filament\Schemas\Components\Utilities\Get;
use Filament\Forms\Components\Placeholder;
use Filament\Tables\Columns\TextColumn;
use Filament\Actions\EditAction;
use Filament\Actions\DeleteAction;
use Filament\Actions\DeleteBulkAction;
use App\Filament\Resources\Packages\RelationManagers\UsersRelationManager;
use App\Filament\Resources\Packages\Pages\ListPackages;
use App\Filament\Resources\Packages\Pages\CreatePackage;
use App\Filament\Resources\Packages\Pages\EditPackage;
use Filament\Forms;
use Filament\Tables;
use App\Models\Package;
use App\Models\Provider;
use Filament\Tables\Table;
use App\Models\ProviderPlan;
use Filament\Resources\Resource;
use Illuminate\Support\HtmlString;
use Filament\Notifications\Notification;
use App\Filament\Resources\Servers\ServerResource;
use App\Filament\Resources\Sites\SiteResource;
use App\Filament\Resources\Providers\ProviderResource;
use App\Filament\Resources\PackageResource\Pages;
use App\Filament\Resources\PackageResource\RelationManagers;

class PackageResource extends Resource
{
    protected static ?string $model = Package::class;

    protected static string | \BackedEnum | null $navigationIcon = 'heroicon-o-swatch';

    protected static ?int $navigationSort = 3;

    public static function form(Schema $schema): Schema
    {
        return $schema
            ->components([
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
                TextInput::make('stripe_plan_id')
                    ->helperText(new HtmlString(__('Enter the pricing ID from Stripe here') . ' - <a href="https://docs.ploi-core.io/263-digging-deeper/743-using-stripe" target="ploi-docs-stripe" class="text-primary-500">How does this work?</a>'))
                    ->label(__('Stripe ID'))
                    ->columnSpan(2),
                TextInput::make('price_monthly')
                    ->label(__('Monthly price'))
                    ->helperText(__('Fill this in if you want it to be monthly payments'))
                    ->required(),
                TextInput::make('price_yearly')
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
                        'nz' => 'NZD $ (New Zealand Dollar)',
                    ])
                    ->required(),
                Grid::make()
                    ->schema([
                        Section::make(__('Server permissions'))
                            ->icon(ServerResource::getNavigationIcon())
                            ->schema([
                                Checkbox::make('server_permissions.create')
                                    ->reactive()
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
                            ->icon(SiteResource::getNavigationIcon())
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

                Grid::make()
                    ->schema([
                        Section::make(__('Available server providers'))
                            ->description(__('These server providers will be available for users that are attached to this package.'))
                            ->icon(ProviderResource::getNavigationIcon())
                            ->schema([
                                CheckboxList::make('providers')
                                    ->relationship('providers', 'name')
                                    ->reactive(),
                                Grid::make(1)
                                    ->schema([
                                        Actions::make([
                                            Action::make('manage_provider_plans')
                                                ->label(__('Manage provider plans'))
                                                ->icon('heroicon-o-adjustments-horizontal')
                                                ->schema(function (Package $record) {
                                                    return $record->providers->sortBy('name')->map(function (Provider $provider) {
                                                        return Section::make($provider->label)
                                                            ->description(__('Select the plans that should be available for this provider on this package.'))
                                                            ->icon(ProviderResource::getNavigationIcon())
                                                            ->statePath($provider->id)
                                                            ->schema([
                                                                Toggle::make('select_specific_provider_plans')
                                                                    ->label(__('Select subset'))
                                                                    ->helperText(__('Check this box if you want to limit the provider plans available on this package.'))
                                                                    ->default(false)
                                                                    ->reactive()
                                                                    ->afterStateUpdated(function (Toggle $component, Set $set) use ($provider) {
                                                                        $set(
                                                                            path: "provider_plans",
                                                                            state: $component->getState() ? $provider->plans->pluck('id') : [],
                                                                        );
                                                                    }),
                                                                CheckboxList::make("provider_plans")
                                                                    ->label(__('Select plans'))
                                                                    ->options(fn () => $provider->plans->mapWithKeys(fn (ProviderPlan $providerPlan) => [$providerPlan->id => $providerPlan->label ?? $providerPlan->plan_id])->all())
                                                                    ->visible(fn (Get $get) => $get('select_specific_provider_plans'))
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
                                                ->disabled(function (Package $record, Get $get) {
                                                    $providers = collect($get('providers'))
                                                        ->map(fn (string $id): int => (int)$id)
                                                        ->sort();

                                                    return $record->providers->pluck('id')->map(fn (string $id): int => (int)$id)->sort()->toArray() !== $providers->all();
                                                })
                                        ]),
                                        Placeholder::make('save_warning')
                                            ->content(__('You\'ve changed the available server providers. Please save your changes before you can manage the provider plans.'))
                                            ->visible(function (Package $record, Get $get) {
                                                $providers = collect($get('providers'))
                                                    ->map(fn (string $id): int => (int)$id)
                                                    ->sort();

                                                return $record->providers->pluck('id')->map(fn (string $id): int => (int)$id)->sort()->toArray() !== $providers->all();
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
                TextColumn::make('id')
                    ->label('ID')
                    ->searchable(),
                TextColumn::make('name')
                    ->label(__('Name'))
                    ->description(function (Package $record) {
                        if (!$record->stripe_plan_id) {
                            return __('Not attached to Stripe.');
                        }

                        return "Attached to stripe - {$record->price_monthly} {$record->currency}";
                    }),
                TextColumn::make('maximum_sites')
                    ->formatStateUsing(fn (int $state) => $state === 0 ? __('Unlimited') : $state)
                    ->label(__('Maximum sites')),
                TextColumn::make('maximum_servers')
                    ->formatStateUsing(fn (int $state) => $state === 0 ? __('Unlimited') : $state)
                    ->label(__('Maximum servers')),
                TextColumn::make('users_count')
                    ->counts('users'),
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
            ]);
    }

    public static function getRelations(): array
    {
        return [
            UsersRelationManager::class,
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => ListPackages::route('/'),
            'create' => CreatePackage::route('/create'),
            'edit' => EditPackage::route('/{record}/edit'),
        ];
    }
}
