<?php
require 'vendor/autoload.php';
$app = require_once 'bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

use Spatie\Permission\Models\Role;

$roles = Role::all();
foreach ($roles as $role) {
    $role->name = trim($role->name);
    $role->save();
}

echo "Roles trimmed successfully.\n";
