<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class MinimarketSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // 1. Buat Kategori (Wajib memiliki gambar)
        $categoriesData = [
            ['name' => 'Makanan Instan', 'image_path' => 'https://placehold.co/400x400/0b85ff/ffffff?text=Makanan+Instan'],
            ['name' => 'Minuman Dingin', 'image_path' => 'https://placehold.co/400x400/1c1f33/ffffff?text=Minuman+Dingin'],
            ['name' => 'Kebutuhan Mandi', 'image_path' => 'https://placehold.co/400x400/30a46c/ffffff?text=Kebutuhan+Mandi'],
            ['name' => 'Snack & Camilan', 'image_path' => 'https://placehold.co/400x400/e5484d/ffffff?text=Snack+Camilan'],
        ];

        $categories = [];
        foreach ($categoriesData as $cat) {
            $categories[$cat['name']] = Category::create($cat);
        }

        // 2. Buat Produk Minimarket (Sengaja tidak diberi foto agar mewarisi dari kategori)
        $products = [
            // Makanan Instan
            ['category' => 'Makanan Instan', 'name' => 'Indomie Goreng Original', 'price' => 3100, 'stock' => 120],
            ['category' => 'Makanan Instan', 'name' => 'Indomie Kari Ayam', 'price' => 3000, 'stock' => 85],
            ['category' => 'Makanan Instan', 'name' => 'Mie Sedap Soto', 'price' => 2900, 'stock' => 50],
            ['category' => 'Makanan Instan', 'name' => 'Pop Mie Rasa Ayam', 'price' => 5500, 'stock' => 30],
            ['category' => 'Makanan Instan', 'name' => 'Super Bubur Ayam', 'price' => 4500, 'stock' => 40],
            ['category' => 'Makanan Instan', 'name' => 'Samyang Spicy Ramen', 'price' => 18000, 'stock' => 15],
            ['category' => 'Makanan Instan', 'name' => 'Nissin Cup Noodles', 'price' => 7500, 'stock' => 25],

            // Minuman Dingin
            ['category' => 'Minuman Dingin', 'name' => 'Aqua Botol 600ml', 'price' => 3500, 'stock' => 200],
            ['category' => 'Minuman Dingin', 'name' => 'Pocari Sweat 500ml', 'price' => 7500, 'stock' => 60],
            ['category' => 'Minuman Dingin', 'name' => 'Teh Pucuk Harum', 'price' => 4000, 'stock' => 90],
            ['category' => 'Minuman Dingin', 'name' => 'Coca Cola 390ml', 'price' => 5500, 'stock' => 45],
            ['category' => 'Minuman Dingin', 'name' => 'Sprite 390ml', 'price' => 5500, 'stock' => 45],
            ['category' => 'Minuman Dingin', 'name' => 'Susu Bear Brand', 'price' => 10500, 'stock' => 30],
            ['category' => 'Minuman Dingin', 'name' => 'Kopi Kenangan Mantan', 'price' => 9500, 'stock' => 20],

            // Kebutuhan Mandi
            ['category' => 'Kebutuhan Mandi', 'name' => 'Pepsodent Action 190g', 'price' => 12500, 'stock' => 40],
            ['category' => 'Kebutuhan Mandi', 'name' => 'Lifebuoy Sabun Cair 450ml', 'price' => 28000, 'stock' => 15],
            ['category' => 'Kebutuhan Mandi', 'name' => 'Clear Men Shampoo 160ml', 'price' => 25000, 'stock' => 22],
            ['category' => 'Kebutuhan Mandi', 'name' => 'Biore Mens Body Wash', 'price' => 22000, 'stock' => 18],
            ['category' => 'Kebutuhan Mandi', 'name' => 'Listerine Mouthwash 250ml', 'price' => 21000, 'stock' => 10],
            ['category' => 'Kebutuhan Mandi', 'name' => 'Sikat Gigi Formula', 'price' => 8000, 'stock' => 55],

            // Snack & Camilan
            ['category' => 'Snack & Camilan', 'name' => 'Chitato Sapi Panggang', 'price' => 11500, 'stock' => 65],
            ['category' => 'Snack & Camilan', 'name' => 'Taro Net Seaweed', 'price' => 6000, 'stock' => 40],
            ['category' => 'Snack & Camilan', 'name' => 'Oreo Original 133g', 'price' => 9500, 'stock' => 80],
            ['category' => 'Snack & Camilan', 'name' => 'Silverqueen Almond 62g', 'price' => 16500, 'stock' => 35],
            ['category' => 'Snack & Camilan', 'name' => 'Beng Beng Regular', 'price' => 2500, 'stock' => 150],
            ['category' => 'Snack & Camilan', 'name' => 'Kacang Garuda Rosta', 'price' => 10000, 'stock' => 45],
            ['category' => 'Snack & Camilan', 'name' => 'Qtela Singkong Balado', 'price' => 12000, 'stock' => 30],
            ['category' => 'Snack & Camilan', 'name' => 'Choki Choki', 'price' => 1000, 'stock' => 200],
        ];

        foreach ($products as $index => $prod) {
            $newProduct = Product::create([
                'name' => $prod['name'],
                'sku' => 'SKU-' . strtoupper(Str::random(5)) . sprintf('%03d', $index),
                'price' => $prod['price'],
                'stock' => $prod['stock'],
                'warehouse_stock' => rand(10, 100),
                'warehouse_unit' => 'Karton',
                'store_unit' => 'Pcs',
                'conversion_rate' => rand(12, 48),
                // image_path disengaja null, agar UI memunculkan foto dari kategori
                'image_path' => null, 
            ]);

            // N:M Attach Categories
            $newProduct->categories()->attach($categories[$prod['category']]->id);
        }
    }
}
