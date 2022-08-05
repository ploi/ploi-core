<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class DocumentationCategory extends Model
{
    public $fillable = [
        'title',
        'description',
    ];

    public function items(): HasMany
    {
        return $this->hasMany(DocumentationItem::class);
    }
}
