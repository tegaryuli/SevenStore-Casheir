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
            ['email' => 'sulkerkiwe@gmail.com'],
            [
                'name' => 'Administrator Toko',
                'password' => 'iajwdijasidja1239123',
                'role_id' => $adminRole->id,
                'email_verified_at' => now(),
            ],
        );

        User::updateOrCreate(
            ['email' => 'ngomongapasampean@gmail.com'],
            [
                'name' => 'Kasir Satu',
                'password' => 'iajwdijasidja1239123',
                'role_id' => $kasirRole->id,
                'email_verified_at' => now(),
            ],
        );
    }
}