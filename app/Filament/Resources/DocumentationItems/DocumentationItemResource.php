<?php

namespace App\Filament\Resources\DocumentationItems;

use Filament\Schemas\Schema;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\MarkdownEditor;
use Filament\Tables\Columns\TextColumn;
use App\Filament\Resources\DocumentationItems\Pages\ListDocumentationItems;
use App\Filament\Resources\DocumentationItems\Pages\CreateDocumentationItem;
use App\Filament\Resources\DocumentationItems\Pages\EditDocumentationItem;
use Filament\Forms;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Resources\Resource;
use App\Models\DocumentationItem;
use App\Filament\Resources\DocumentationItemResource\Pages;

class DocumentationItemResource extends Resource
{
    protected static ?string $model = DocumentationItem::class;

    protected static string | \BackedEnum | null $navigationIcon = 'heroicon-o-document-duplicate';

    protected static string | \UnitEnum | null $navigationGroup = 'Documentation';

    protected static ?int $navigationSort = 1;

    protected static ?string $pluralLabel = 'Articles';

    protected static ?string $label = 'Article';

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
                    ->required(),
                Select::make('documentation_category_id')
                    ->relationship('category', 'title')
                    ->searchable()
                    ->preload(),
                MarkdownEditor::make('content')
                    ->label(__('Content'))
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
                    ->sortable(),
                TextColumn::make('category.title')
                    ->searchable()
                    ->sortable(),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => ListDocumentationItems::route('/'),
            'create' => CreateDocumentationItem::route('/create'),
            'edit' => EditDocumentationItem::route('/{record}/edit'),
        ];
    }
}
