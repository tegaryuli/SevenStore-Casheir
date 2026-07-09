<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class MoreProductsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Ambil kategori yang sudah ada di database
        $categories = Category::all()->keyBy('name');

        // Jika kategori utama belum ada, buat baru
        $mainCategories = ['Makanan Instan', 'Minuman Dingin', 'Kebutuhan Mandi', 'Snack & Camilan', 'Keperluan Rumah'];
        foreach ($mainCategories as $catName) {
            if (!isset($categories[$catName])) {
                $categories[$catName] = Category::create([
                    'name' => $catName,
                    'image_path' => 'https://placehold.co/400x400/0b85ff/ffffff?text=' . urlencode($catName),
                ]);
            }
        }

        $newProducts = [
            // Makanan Instan
            ['categories' => ['Makanan Instan'], 'name' => 'Samyang Carbonara', 'price' => 22000, 'stock' => 20],
            ['categories' => ['Makanan Instan'], 'name' => 'Indomie Soto Mie', 'price' => 2900, 'stock' => 150],
            ['categories' => ['Makanan Instan'], 'name' => 'Bihunku Ayam Bawang', 'price' => 3500, 'stock' => 40],
            ['categories' => ['Makanan Instan'], 'name' => 'Lemonilo Mie Goreng', 'price' => 6500, 'stock' => 30],
            ['categories' => ['Makanan Instan'], 'name' => 'ABC Sambal Asli 135ml', 'price' => 7000, 'stock' => 25],
            ['categories' => ['Makanan Instan'], 'name' => 'Kecap Bango 220ml', 'price' => 12500, 'stock' => 50],

            // Minuman Dingin
            ['categories' => ['Minuman Dingin'], 'name' => 'Nescafe Original 240ml', 'price' => 7500, 'stock' => 45],
            ['categories' => ['Minuman Dingin'], 'name' => 'Ultra Milk Coklat 250ml', 'price' => 6000, 'stock' => 80],
            ['categories' => ['Minuman Dingin'], 'name' => 'Mizone Active 500ml', 'price' => 5500, 'stock' => 60],
            ['categories' => ['Minuman Dingin'], 'name' => 'Kopiko 78c Coffee Latte', 'price' => 7000, 'stock' => 35],
            ['categories' => ['Minuman Dingin'], 'name' => 'Le Minerale 600ml', 'price' => 3500, 'stock' => 120],
            ['categories' => ['Minuman Dingin'], 'name' => 'Yakult (Isi 5)', 'price' => 10500, 'stock' => 40],

            // Kebutuhan Mandi
            ['categories' => ['Kebutuhan Mandi'], 'name' => 'SunSilk Soft & Smooth 170ml', 'price' => 23000, 'stock' => 20],
            ['categories' => ['Kebutuhan Mandi'], 'name' => 'Rexona Men Roll On 45ml', 'price' => 17500, 'stock' => 30],
            ['categories' => ['Kebutuhan Mandi'], 'name' => 'Gatsby Styling Pomade', 'price' => 28000, 'stock' => 15],
            ['categories' => ['Kebutuhan Mandi'], 'name' => 'Nuvo Sabun Batang Merah', 'price' => 4500, 'stock' => 80],
            ['categories' => ['Kebutuhan Mandi'], 'name' => 'Head & Shoulders Menthol 160ml', 'price' => 25500, 'stock' => 25],

            // Snack & Camilan
            ['categories' => ['Snack & Camilan'], 'name' => 'Doritos Nacho Cheese', 'price' => 12000, 'stock' => 45],
            ['categories' => ['Snack & Camilan'], 'name' => 'Pringles Original 107g', 'price' => 21000, 'stock' => 20],
            ['categories' => ['Snack & Camilan'], 'name' => 'Yupi Gummy Bears', 'price' => 4000, 'stock' => 90],
            ['categories' => ['Snack & Camilan'], 'name' => 'Chupa Chups Lolly', 'price' => 1500, 'stock' => 150],
            ['categories' => ['Snack & Camilan'], 'name' => 'Biskuat Cokelat', 'price' => 2500, 'stock' => 100],

            // Keperluan Rumah (New Category)
            ['categories' => ['Keperluan Rumah'], 'name' => 'Sunlight Jeruk Nipis 755ml', 'price' => 17500, 'stock' => 35],
            ['categories' => ['Keperluan Rumah'], 'name' => 'Baygon Aerosol 600ml', 'price' => 35000, 'stock' => 15],
            ['categories' => ['Keperluan Rumah'], 'name' => 'Rinso Anti Noda 770g', 'price' => 23000, 'stock' => 25],
            ['categories' => ['Keperluan Rumah'], 'name' => 'Super Pel Pembersih Lantai 770ml', 'price' => 14500, 'stock' => 30],

            // Multi Category Items! (The magic of N:M)
            ['categories' => ['Snack & Camilan', 'Makanan Instan'], 'name' => 'Makaroni BonCabe Level 15', 'price' => 9500, 'stock' => 40],
            ['categories' => ['Minuman Dingin', 'Snack & Camilan'], 'name' => 'Milo Cereal Combo Pack', 'price' => 12500, 'stock' => 25],
        ];

        foreach ($newProducts as $index => $prod) {
            $newProduct = Product::create([
                'name' => $prod['name'],
                'sku' => 'SKU-' . strtoupper(Str::random(4)) . sprintf('%03d', rand(1,999)),
                'price' => $prod['price'],
                'stock' => $prod['stock'],
                'image_path' => null, // Biarkan null agar menggunakan fallback
            ]);

            // Map category names to IDs
            $catIds = array_map(function($catName) use ($categories) {
                return $categories[$catName]->id;
            }, $prod['categories']);

            $newProduct->categories()->attach($catIds);
        }
    }
}
