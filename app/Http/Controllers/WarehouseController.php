<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use App\Models\StockTransfer;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;

class WarehouseController extends Controller
{
    public function index()
    {
        $products = Product::with('categories')->latest()->get();
        $categories = Category::all();
        return Inertia::render('Warehouse', [
            'view' => 'index',
            'products' => $products,
            'categories' => $categories,
        ]);
    }

    public function history(Request $request)
    {
        $user = $request->user();
        $isAdmin = $user->hasRole('Admin');
        
        $query = StockTransfer::with(['product', 'user'])->latest();
        
        $filterUserId = $request->input('user_id', 'all');

        if (!$isAdmin) {
            $query->where('user_id', $user->id);
        } else if ($filterUserId !== 'all') {
            $query->where('user_id', $filterUserId);
        }

        $staffList = [];
        if ($isAdmin) {
            $staffList = \App\Models\User::role(['Admin', 'Inventaris'])->select('id', 'name')->get();
        }
        
        return Inertia::render('Warehouse', [
            'view' => 'history',
            'transfers' => $query->get(),
            'selectedUserId' => $filterUserId,
            'staffList' => $staffList,
        ]);
    }

    public function transfer(Request $request)
    {
        $validated = $request->validate([
            'product_id' => 'required|exists:products,id',
            'qty' => 'required|integer|min:1',
        ]);

        $product = Product::findOrFail($validated['product_id']);

        if ($product->warehouse_stock < $validated['qty']) {
            return back()->withErrors(['qty' => 'Stok gudang tidak mencukupi']);
        }

        DB::transaction(function () use ($product, $validated, $request) {
            $qtyDeducted = $validated['qty'];
            $qtyAdded = $qtyDeducted * ($product->conversion_rate ?: 1);

            $product->warehouse_stock -= $qtyDeducted;
            $product->stock += $qtyAdded;
            $product->save();

            StockTransfer::create([
                'product_id' => $product->id,
                'user_id' => $request->user()->id,
                'qty_deducted' => $qtyDeducted,
                'qty_added' => $qtyAdded,
            ]);

            \App\Models\ActivityLog::create([
                'user_id' => $request->user()->id,
                'action' => 'warehouse_transfer',
                'description' => "User {$request->user()->name} membuka segel gudang untuk produk {$product->name} sebanyak {$qtyDeducted}."
            ]);
        });

        return back()->with('success', 'Berhasil membuka segel dan memindahkan stok ke toko.');
    }
}
