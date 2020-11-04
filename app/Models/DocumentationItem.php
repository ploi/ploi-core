<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DocumentationItem extends Model
{
    public $fillable = [
        'title',
        'content'
    ];

    public function category()
    {
        return $this->belongsTo(DocumentationCategory::class, 'documentation_category_id');
    }
}
