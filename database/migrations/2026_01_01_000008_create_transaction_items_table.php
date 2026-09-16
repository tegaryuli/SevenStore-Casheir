<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('transaction_items', function (Blueprint $table) {
            $table->id();
            $table->foreignId('transaction_id')->constrained('transactions')->onDelete('cascade');
            $table->foreignId('product_id')->nullable()->constrained('products')->onDelete('set null');
            $table->string('product_name');
            $table->decimal('price', 12, 2);
            $table->decimal('cost_price', 15, 2)->default(0)->comment('Harga modal saat transaksi');
            $table->integer('quantity');
            $table->decimal('subtotal', 12, 2);
            $table->decimal('profit', 15, 2)->default(0)->comment('Keuntungan (subtotal - (cost_price * qty))');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('transaction_items');
    }
};
