<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Prunable;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable, SoftDeletes, Prunable, HasRoles;

    /**
     * The attributes that are mass assignable.
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'display_id',
        'avatar',
    ];
    protected static function booted()
    {
        parent::booted();

        static::creating(function ($user) {

            $user->display_id = 'USR-' . random_int(1000000, 9999999);
        });
    }

    /**
     * Get the prunable model query.
     */
    public function prunable()
    {
        return static::where('deleted_at', '<=', now()->subHours(2));
    }

    /**
     * Beritahu Laravel untuk mencari data berdasarkan display_id di URL
     */
    public function getRouteKeyName(): string
    {
        return 'display_id';
    }

    /**
     * The attributes that should be hidden for serialization.
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }
}