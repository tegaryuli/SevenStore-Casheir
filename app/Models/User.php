<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Relations\BelongsTo; // Tambahkan ini agar lebih rapi

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'role_id', 
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

    /**
     * Relasi ke tabel Role
     */
    public function role(): BelongsTo
    {
        return $this->belongsTo(Role::class);
    }

    /**
     * Helper untuk cek role di Controller/View
     */
    public function hasRole($roleName)
    {
        // Tambahkan pengecekan null agar tidak error jika user tidak punya role
        return $this->role && $this->role->name === $roleName;
    }
}