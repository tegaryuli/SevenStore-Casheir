<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'sku',
        'price',
        'cost_price',
        'stock',
        'warehouse_stock',
        'warehouse_unit',
        'store_unit',
        'conversion_rate',
        'image_path',
    ];

    /**
     * Relasi N:M ke Category
     */
    public function categories(): BelongsToMany
    {
        return $this->belongsToMany(Category::class);
    }

    public function stockTransfers()
    {
        return $this->hasMany(StockTransfer::class);
    }

    /**
     * Accessor untuk fall-back gambar ke kategori pertama jika produk tidak punya gambar.
     */
    protected function imagePath(): Attribute
    {
        return Attribute::make(
            get: fn (string|null $value) => $value ?: ($this->categories->first() ? $this->categories->first()->image_path : null)
        );
    }
}
