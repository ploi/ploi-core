<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DocumentationCategory extends Model
{
    public $fillable = [
        'title',
        'description'
    ];

    public function items()
    {
        return $this->hasMany(DocumentationItem::class);
    }
}
