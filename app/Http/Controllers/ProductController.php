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
            'products' => $products,
            'categories' => $categories,
        ]);
    }

    public function create()
    {
        $categories = Category::all();
        return Inertia::render('Products/Form', [
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
            'image_path' => $imagePath,
        ]);

        $product->categories()->attach($validated['categories']);

        return redirect()->route('produk.index')->with('success', 'Produk berhasil ditambahkan.');
    }

    public function edit(Product $produk)
    {
        $produk->load('categories');
        $categories = Category::all();
        
        return Inertia::render('Products/Form', [
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
            'categories' => 'required|array|min:1',
            'categories.*' => 'exists:categories,id',
            'image' => 'nullable|image|max:2048',
            'sku' => 'required|string|unique:products,sku,' . $produk->id,
        ]);

        $produk->name = $validated['name'];
        $produk->price = $validated['price'];
        $produk->stock = $validated['stock'];
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

        return redirect()->route('produk.index')->with('success', 'Produk berhasil diperbarui.');
    }

    public function destroy(Product $produk)
    {
        if ($produk->image_path && !str_starts_with($produk->image_path, 'http')) {
            Storage::disk('public')->delete(str_replace('/storage/', '', $produk->image_path));
        }

        $produk->delete(); // Akan menghapus relasi pivot otomatis karena cascadeOnDelete di migration

        return back()->with('success', 'Produk berhasil dihapus.');
    }
}
