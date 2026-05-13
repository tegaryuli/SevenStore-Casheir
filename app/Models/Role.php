<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Role extends Model
{
    // Izinkan pengisian kolom name dan display_name
    protected $fillable = ['name', 'display_name'];

    /**
     * Relasi: Satu Role dimiliki oleh banyak User
     */
    public function users(): HasMany
    {
        return $this->hasMany(User::class);
    }
}