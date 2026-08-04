<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('products', function (Blueprint $table) {
            $table->integer('warehouse_stock')->default(0)->after('stock');
            $table->string('warehouse_unit')->nullable()->after('warehouse_stock');
            $table->string('store_unit')->nullable()->after('warehouse_unit');
            $table->integer('conversion_rate')->default(1)->after('store_unit');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('products', function (Blueprint $table) {
            $table->dropColumn(['warehouse_stock', 'warehouse_unit', 'store_unit', 'conversion_rate']);
        });
    }
};
