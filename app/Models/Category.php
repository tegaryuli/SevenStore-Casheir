<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Category extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'image_path'];

    /**
     * Relasi N:M ke Product
     */
    public function products(): BelongsToMany
    {
        return $this->belongsToMany(Product::class);
    }
}
