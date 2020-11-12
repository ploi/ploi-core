<?php

namespace App\Http\Controllers\Admin;

use App\Models\DocumentationItem;
use App\Http\Controllers\Controller;
use App\Models\DocumentationCategory;
use App\Http\Requests\Admin\DocumentationArticleRequest;

class DocumentationArticleController extends Controller
{
    public function index()
    {
        $articles = DocumentationItem::query()->with('category:id,title')->latest()->paginate();

        return inertia('Admin/Documentation/Articles/Index', [
            'articles' => $articles
        ]);
    }

    public function create()
    {
        $categories = DocumentationCategory::pluck('title', 'id');

        return inertia('Admin/Documentation/Articles/Create', [
            'categories' => $categories,
        ]);
    }

    public function store(DocumentationArticleRequest $request)
    {
        $article = DocumentationItem::create([
            'title' => $request->input('title'),
            'content' => $request->input('content')
        ]);

        $article->documentation_category_id = $request->input('category_id');
        $article->save();

        return redirect()->route('admin.documentation.articles.index')->with('success', __('Documentation article has been created'));
    }

    public function edit($id)
    {
        $article = DocumentationItem::findOrFail($id);

        $categories = DocumentationCategory::pluck('title', 'id');

        return inertia('Admin/Documentation/Articles/Edit', [
            'article' => $article,
            'categories' => $categories
        ]);
    }

    public function update(DocumentationArticleRequest $request, $id)
    {
        $article = DocumentationItem::findOrFail($id);

        $article->update([
            'title' => $request->input('title'),
            'content' => $request->input('content')
        ]);

        $article->documentation_category_id = $request->input('category_id');
        $article->save();

        return redirect()->route('admin.documentation.articles.index')->with('success', __('Documentation article has been updated'));
    }
}
