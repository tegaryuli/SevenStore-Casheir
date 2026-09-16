<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        $adminRole = Role::where('name', 'admin')->firstOrFail();
        $kasirRole = Role::where('name', 'kasir')->firstOrFail();

        $admin = User::updateOrCreate(
            ['email' => 'sulkerkiwe@gmail.com'],
            [
                'name' => 'Administrator Toko',
                'password' => 'iajwdijasidja1239123',
                'email_verified_at' => now(),
            ],
        );
        $admin->assignRole($adminRole);

        $kasir = User::updateOrCreate(
            ['email' => 'ngomongapasampean@gmail.com'],
            [
                'name' => 'Kasir Satu',
                'password' => 'iajwdijasidja1239123',
                'email_verified_at' => now(),
            ],
        );
        $kasir->assignRole($kasirRole);
    }
}