<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ProviderPlan extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function provider(): BelongsTo
    {
        return $this->belongsTo(Provider::class);
    }
}
