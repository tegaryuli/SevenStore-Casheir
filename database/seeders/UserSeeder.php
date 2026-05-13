<?php

namespace Database\Seeders;

use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Seeder;
class UserSeeder extends Seeder
{
    public function run(): void
    {
        $adminRole = Role::query()->where('name', 'admin')->firstOrFail();
        $kasirRole = Role::query()->where('name', 'kasir')->firstOrFail();

        User::updateOrCreate(
            ['email' => 'admin@toko7.com'],
            [
                'name' => 'Administrator Toko',
                'password' => 'iajwdijasidja1239123',
                'role_id' => $adminRole->id,
            ],
        );

        User::updateOrCreate(
            ['email' => 'kasir1@toko7.com'],
            [
                'name' => 'Kasir Satu',
                'password' => 'iajwdijasidja1239123',
                'role_id' => $kasirRole->id,
            ],
        );
    }
}