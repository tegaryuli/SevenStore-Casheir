<?php

namespace Database\Seeders;

use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * Catatan: jangan pakai WithoutModelEvents di seeder ini jika User mengisi
     * display_id lewat event creating — tanpa event, kolom display_id kosong dan insert gagal.
     */
    public function run(): void
    {
        Role::updateOrCreate(
            ['name' => 'admin'],
            ['display_name' => 'Pemilik'],
        );
        Role::updateOrCreate(
            ['name' => 'kasir'],
            ['display_name' => 'Staff Kasir'],
        );

        $this->call([
            UserSeeder::class,
            DummyDataSeeder::class,
        ]);
    }
}
