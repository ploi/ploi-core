<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\DocumentationArticleRequest;
use App\Models\DocumentationItem;
use Illuminate\Http\Request;

class DocumentationArticleController extends Controller
{
    public function index()
    {
        $articles = DocumentationItem::query()->latest()->paginate();

        return inertia('Admin/Documentation/Articles/Index', [
            'articles' => $articles
        ]);
    }

    public function create()
    {
        return inertia('Admin/Documentation/Articles/Create');
    }

    public function store(DocumentationArticleRequest $request)
    {
        $article = DocumentationItem::create([
            'title' => $request->input('title'),
            'content' => $request->input('content')
        ]);

        return redirect()->route('admin.documentation.articles.index')->with('success', __('Documentation article has been created'));
    }

    public function edit($id)
    {
        $article = DocumentationItem::findOrFail($id);

        return inertia('Admin/Documentation/Articles/Edit', [
            'article' => $article
        ]);
    }

    public function update(Request $request, $id)
    {
        $article = DocumentationItem::findOrFail($id);

        $article->update([
            'title' => $request->input('title'),
            'content' => $request->input('content')
        ]);

        return redirect()->route('admin.documentation.articles.index')->with('success', __('Documentation article has been updated'));
    }
}
