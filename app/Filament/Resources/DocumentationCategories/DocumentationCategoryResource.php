<?php

namespace App\Filament\Resources\DocumentationCategories;

use Filament\Schemas\Schema;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\MarkdownEditor;
use Filament\Tables\Columns\TextColumn;
use App\Filament\Resources\DocumentationCategories\RelationManagers\DocumentationItemsRelationManager;
use App\Filament\Resources\DocumentationCategories\Pages\ListDocumentationCategories;
use App\Filament\Resources\DocumentationCategories\Pages\CreateDocumentationCategory;
use App\Filament\Resources\DocumentationCategories\Pages\EditDocumentationCategory;
use Filament\Forms;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Support\Str;
use Filament\Resources\Resource;
use Illuminate\Support\HtmlString;
use App\Models\DocumentationCategory;
use App\Filament\Resources\DocumentationCategoryResource\Pages;
use App\Filament\Resources\DocumentationCategoryResource\RelationManagers;

class DocumentationCategoryResource extends Resource
{
    protected static ?string $model = DocumentationCategory::class;

    protected static string | \BackedEnum | null $navigationIcon = 'heroicon-o-tag';

    protected static string | \UnitEnum | null $navigationGroup = 'Documentation';

    protected static ?int $navigationSort = 2;

    protected static ?string $pluralLabel = 'Categories';

    protected static ?string $label = 'Category';

    public static function shouldRegisterNavigation(): bool
    {
        return (bool)setting('documentation');
    }

    public static function form(Schema $schema): Schema
    {
        return $schema
            ->components([
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
            'index' => ListDocumentationCategories::route('/'),
            'create' => CreateDocumentationCategory::route('/create'),
            'edit' => EditDocumentationCategory::route('/{record}/edit'),
        ];
    }

    public static function getGloballySearchableAttributes(): array
    {
        return ['title'];
    }
}
