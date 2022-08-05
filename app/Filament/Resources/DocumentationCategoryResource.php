<?php

namespace App\Filament\Resources;

use App\Filament\Resources\DocumentationCategoryResource\Pages;
use App\Filament\Resources\DocumentationCategoryResource\RelationManagers\DocumentationItemsRelationManager;
use App\Filament\Resources\DocumentationCategoryResource\RelationManagers\ItemsRelationManager;
use App\Models\DocumentationCategory;
use Filament\Forms\Components\MarkdownEditor;
use Filament\Forms\Components\TextInput;
use Filament\Resources\Form;
use Filament\Resources\Resource;
use Filament\Resources\Table;
use Filament\Tables\Columns\TextColumn;
use Illuminate\Support\HtmlString;
use Illuminate\Support\Str;

class DocumentationCategoryResource extends Resource
{
    protected static ?string $model = DocumentationCategory::class;

    protected static ?string $navigationIcon = 'heroicon-o-tag';

    protected static ?string $navigationGroup = 'Documentation';

    protected static ?int $navigationSort = 2;

    protected static ?string $pluralLabel = 'Categories';

    protected static ?string $label = 'Category';

    protected static function shouldRegisterNavigation(): bool
    {
        return (bool) setting('documentation');
    }

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('title')
                    ->label(__('Title'))
                    ->unique(table: DocumentationCategory::class, column: 'title', ignoreRecord: true)
                    ->required()
                    ->columnSpan(2),
                MarkdownEditor::make('description')
                    ->label(__('Description'))
                    ->required()
                    ->columnSpan(2),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('title')
                    ->searchable()
                    ->sortable()
                    ->label(__('Title')),
                TextColumn::make('description')
                    ->label(__('Description'))
                    ->formatStateUsing(fn (string $state) => new HtmlString(Str::markdown($state))),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            DocumentationItemsRelationManager::class,
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListDocumentationCategories::route('/'),
            'create' => Pages\CreateDocumentationCategory::route('/create'),
            'edit' => Pages\EditDocumentationCategory::route('/{record}/edit'),
        ];
    }

    public static function getGloballySearchableAttributes(): array
    {
        return ['title'];
    }
}
