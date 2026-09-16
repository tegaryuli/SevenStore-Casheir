<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('sku')->unique();
            $table->decimal('price', 15, 2);
            $table->decimal('cost_price', 15, 2)->default(0)->comment('Harga beli/modal');
            $table->integer('stock')->default(0);
            $table->integer('warehouse_stock')->default(0);
            $table->string('warehouse_unit')->nullable();
            $table->string('store_unit')->nullable();
            $table->integer('conversion_rate')->default(1);
            $table->string('image_path')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
