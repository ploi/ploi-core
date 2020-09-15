<?php

namespace App\Http\Controllers;

use App\Models\DocumentationItem;
use App\Http\Resources\DocumentationItemResource;

class DocumentationController extends Controller
{
    public function index()
    {
        $documentationItems = DocumentationItem::latest()->paginate();

        return inertia('Documentation/Index', [
            'items' => DocumentationItemResource::collection($documentationItems)
        ]);
    }
}
