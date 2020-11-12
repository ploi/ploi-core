<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\DocumentationCategory;
use App\Http\Requests\Admin\DocumentationCategoryRequest;

class DocumentationController extends Controller
{
    public function index()
    {
        $categories = DocumentationCategory::query()->latest()->paginate();

        return inertia('Admin/Documentation/Index', [
            'categories' => $categories
        ]);
    }

    public function create()
    {
        return inertia('Admin/Documentation/Create');
    }

    public function store(DocumentationCategoryRequest $request)
    {
        DocumentationCategory::create([
            'title' => $request->input('title'),
            'description' => $request->input('description')
        ]);

        return redirect()->route('admin.documentation.index')->with('success', __('Documentation category has been created'));
    }

    public function edit($id)
    {
        $category = DocumentationCategory::findOrFail($id);

        return inertia('Admin/Documentation/Edit', [
            'category' => $category
        ]);
    }

    public function update(DocumentationCategoryRequest $request, $id)
    {
        $category = DocumentationCategory::findOrFail($id);

        $category->update([
            'title' => $request->input('title'),
            'description' => $request->input('description'),
        ]);

        return redirect()->route('admin.documentation.index')->with('success', __('Documentation category has been updated'));
    }
}
