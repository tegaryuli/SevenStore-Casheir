<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class CategoryController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'image' => 'required|image|max:2048', // Wajib ada gambar
        ]);

        $path = $request->file('image')->store('categories', 'public');

        Category::create([
            'name' => $validated['name'],
            'image_path' => '/storage/' . $path,
        ]);

        return back()->with('success', 'Kategori berhasil ditambahkan.');
    }

    public function update(Request $request, Category $category)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'image' => 'nullable|image|max:2048',
        ]);

        $category->name = $validated['name'];

        if ($request->hasFile('image')) {
            // Hapus gambar lama jika bukan bawaan seeder (URL luar)
            if ($category->image_path && !str_starts_with($category->image_path, 'http')) {
                Storage::disk('public')->delete(str_replace('/storage/', '', $category->image_path));
            }
            $path = $request->file('image')->store('categories', 'public');
            $category->image_path = '/storage/' . $path;
        }

        $category->save();

        return back()->with('success', 'Kategori berhasil diperbarui.');
    }

    public function destroy(Category $category)
    {
        // Peringatan Hapus Kategori akan ditangani di Frontend (Warning).
        // Di sini kita langsung hapus. Karena N:M dengan cascade, ini akan otomatis
        // memutus relasi di tabel pivot. Produk TIDAK terhapus, hanya hilang relasi kategorinya.
        // Jika ingin menghapus produk yang KOSONG kategorinya, kita bisa membersihkannya secara manual.
        
        if ($category->image_path && !str_starts_with($category->image_path, 'http')) {
            Storage::disk('public')->delete(str_replace('/storage/', '', $category->image_path));
        }

        $category->delete();

        // (Opsional) Hapus produk yang tidak memiliki kategori lagi setelah ini
        $orphanedProducts = \App\Models\Product::doesntHave('categories')->get();
        foreach($orphanedProducts as $product) {
            if ($product->image_path && !str_starts_with($product->image_path, 'http')) {
                Storage::disk('public')->delete(str_replace('/storage/', '', $product->image_path));
            }
            $product->delete();
        }

        return back()->with('success', 'Kategori dihapus. Produk yang hanya memiliki kategori ini juga ikut terhapus otomatis.');
    }
}
