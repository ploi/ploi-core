<?php

namespace App\Http\Controllers;

use App\Models\DocumentationCategory;
use App\Http\Resources\DocumentationCategoryRouteResource;
use App\Models\DocumentationItem;
use Illuminate\Support\Str;

class DocumentationController extends Controller
{
    public function index()
    {
        $items = DocumentationCategory::query()->oldest()->get();

        return inertia('Documentation/Index', [
            'items' => DocumentationCategoryRouteResource::collection($items)
        ]);
    }

    public function show(DocumentationCategory $documentationCategory)
    {
        $items = DocumentationCategory::query()->oldest()->get();

        return inertia('Documentation/Show', [
            'category' => $documentationCategory,
            'articles' => $documentationCategory->items()->latest()->get(),
            'items' => DocumentationCategoryRouteResource::collection($items)
        ]);
    }

    public function showArticle(DocumentationCategory $documentationCategory, DocumentationItem $documentationItem)
    {
        $items = DocumentationCategory::query()->oldest()->get();

        $documentationItem->content = Str::markdown($documentationItem->content);

        return inertia('Documentation/Article', [
            'category' => $documentationCategory,
            'article' => $documentationItem,
            'items' => DocumentationCategoryRouteResource::collection($items)
        ]);
    }
}
