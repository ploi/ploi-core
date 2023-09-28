<?php

namespace App\Filament\Resources;

use App\Filament\Resources\DocumentationItemResource\Pages;
use App\Models\DocumentationItem;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class DocumentationItemResource extends Resource
{
    protected static ?string $model = DocumentationItem::class;

    protected static ?string $navigationIcon = 'heroicon-o-document-duplicate';

    protected static ?string $navigationGroup = 'Documentation';

    protected static ?int $navigationSort = 1;

    protected static ?string $pluralLabel = 'Articles';

    protected static ?string $label = 'Article';

    public static function shouldRegisterNavigation(): bool
    {
        return (bool)setting('documentation');
    }

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('title')
                    ->label(__('Title'))
                    ->required(),
                Forms\Components\Select::make('documentation_category_id')
                    ->relationship('category', 'title')
                    ->searchable()
                    ->preload(),
                Forms\Components\MarkdownEditor::make('content')
                    ->label(__('Content'))
                    ->required()
                    ->columnSpan(2),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('title')
                    ->searchable()
                    ->sortable(),
                Tables\Columns\TextColumn::make('category.title')
                    ->searchable()
                    ->sortable(),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListDocumentationItems::route('/'),
            'create' => Pages\CreateDocumentationItem::route('/create'),
            'edit' => Pages\EditDocumentationItem::route('/{record}/edit'),
        ];
    }
}
