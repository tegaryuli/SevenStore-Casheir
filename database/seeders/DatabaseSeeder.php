<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

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
        $this->call([
            RoleSeeder::class,
            UserSeeder::class,
            DummyDataSeeder::class,
        ]);
    }
}
