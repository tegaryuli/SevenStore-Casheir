<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::with('categories')->latest()->get();
        $categories = Category::all();

        return Inertia::render('Products', [
            'view' => 'index',
            'products' => $products,
            'categories' => $categories,
        ]);
    }

    public function create()
    {
        $categories = Category::all();
        return Inertia::render('Products', [
            'view' => 'form',
            'categories' => $categories,
            'product' => null
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'price' => 'required|numeric|min:0',
            'stock' => 'required|integer|min:0',
            'warehouse_stock' => 'nullable|integer|min:0',
            'warehouse_unit' => 'nullable|string|max:50',
            'store_unit' => 'nullable|string|max:50',
            'conversion_rate' => 'nullable|integer|min:1',
            'categories' => 'required|array|min:1',
            'categories.*' => 'exists:categories,id',
            'image' => 'nullable|image|max:2048',
            'sku' => 'nullable|string|unique:products,sku',
        ]);

        $imagePath = null;
        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('products', 'public');
            $imagePath = '/storage/' . $path;
        }

        $sku = $validated['sku'] ?: 'SKU-' . strtoupper(Str::random(5)) . rand(100, 999);

        $product = Product::create([
            'name' => $validated['name'],
            'sku' => $sku,
            'price' => $validated['price'],
            'stock' => $validated['stock'],
            'warehouse_stock' => $validated['warehouse_stock'] ?? 0,
            'warehouse_unit' => $validated['warehouse_unit'],
            'store_unit' => $validated['store_unit'],
            'conversion_rate' => $validated['conversion_rate'] ?? 1,
            'image_path' => $imagePath,
        ]);

        $product->categories()->attach($validated['categories']);

        if ($request->query('source') === 'gudang') {
            return redirect()->route('gudang.index')->with('success', 'Produk berhasil ditambahkan ke Gudang.');
        }

        return redirect()->route('produk.index')->with('success', 'Produk berhasil ditambahkan.');
    }

    public function edit(Product $produk)
    {
        $produk->load('categories');
        $categories = Category::all();
        
        return Inertia::render('Products', [
            'view' => 'form',
            'categories' => $categories,
            'product' => $produk,
        ]);
    }

    public function update(Request $request, Product $produk)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'price' => 'required|numeric|min:0',
            'stock' => 'required|integer|min:0',
            'warehouse_stock' => 'nullable|integer|min:0',
            'warehouse_unit' => 'nullable|string|max:50',
            'store_unit' => 'nullable|string|max:50',
            'conversion_rate' => 'nullable|integer|min:1',
            'categories' => 'required|array|min:1',
            'categories.*' => 'exists:categories,id',
            'image' => 'nullable|image|max:2048',
            'sku' => 'required|string|unique:products,sku,' . $produk->id,
        ]);

        $produk->name = $validated['name'];
        $produk->price = $validated['price'];
        $produk->stock = $validated['stock'];
        $produk->warehouse_stock = $validated['warehouse_stock'] ?? 0;
        $produk->warehouse_unit = $validated['warehouse_unit'];
        $produk->store_unit = $validated['store_unit'];
        $produk->conversion_rate = $validated['conversion_rate'] ?? 1;
        $produk->sku = $validated['sku'];

        if ($request->hasFile('image')) {
            if ($produk->image_path && !str_starts_with($produk->image_path, 'http')) {
                Storage::disk('public')->delete(str_replace('/storage/', '', $produk->image_path));
            }
            $path = $request->file('image')->store('products', 'public');
            $produk->image_path = '/storage/' . $path;
        }

        $produk->save();
        $produk->categories()->sync($validated['categories']);

        \App\Models\ActivityLog::create([
            'user_id' => $request->user()->id,
            'action' => 'edit_product',
            'description' => "User {$request->user()->name} mengedit produk {$produk->name}."
        ]);

        return redirect()->route('produk.index')->with('success', 'Produk berhasil diperbarui.');
    }

    public function destroy(Product $produk)
    {
        if ($produk->image_path && !str_starts_with($produk->image_path, 'http')) {
            Storage::disk('public')->delete(str_replace('/storage/', '', $produk->image_path));
        }

        $productName = $produk->name;
        $produk->delete(); // Akan menghapus relasi pivot otomatis karena cascadeOnDelete di migration

        \App\Models\ActivityLog::create([
            'user_id' => request()->user()->id,
            'action' => 'delete_product',
            'description' => "User {" . request()->user()->name . "} menghapus produk {$productName}."
        ]);

        return back()->with('success', 'Produk berhasil dihapus.');
    }
}
