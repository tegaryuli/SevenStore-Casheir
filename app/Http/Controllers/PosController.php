<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Product;
use App\Models\Category;
use App\Models\Transaction;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class PosController extends Controller
{
    public function index()
    {
        $products = Product::with('categories')->get();
        $categories = Category::all();
        
        return Inertia::render('Transaction', [
            'view' => 'create',
            'products' => $products,
            'categories' => $categories
        ]);
    }

    public function checkout(Request $request)
    {
        $request->validate([
            'items' => 'required|array|min:1',
            'items.*.id' => 'required|exists:products,id',
            'items.*.quantity' => 'required|integer|min:1',
            'cash_given' => 'required|numeric|min:0',
            'total_amount' => 'required|numeric|min:0',
        ]);

        try {
            DB::beginTransaction();

            $calculatedTotal = 0;
            $items = $request->items;
            
            // Generate invoice number
            $invoiceNumber = 'INV-' . date('Ymd') . '-' . Str::upper(Str::random(5));

            $transaction = Transaction::create([
                'invoice_number' => $invoiceNumber,
                'user_id' => auth()->id(),
                'total_amount' => $request->total_amount,
                'cash_given' => $request->cash_given,
                'change_amount' => max(0, $request->cash_given - $request->total_amount),
                'payment_method' => 'cash',
                'status' => 'completed'
            ]);

            foreach ($items as $item) {
                $product = Product::lockForUpdate()->findOrFail($item['id']);
                
                // Check stock
                if ($product->stock < $item['quantity']) {
                    throw new \Exception("Stok {$product->name} tidak mencukupi!");
                }

                $subtotal = $product->price * $item['quantity'];
                $calculatedTotal += $subtotal;

                // Create transaction item
                $transaction->items()->create([
                    'product_id' => $product->id,
                    'product_name' => $product->name,
                    'price' => $product->price,
                    'cost_price' => $product->cost_price,
                    'quantity' => $item['quantity'],
                    'subtotal' => $subtotal,
                    'profit' => ($product->price - $product->cost_price) * $item['quantity']
                ]);

                // Deduct stock
                $product->decrement('stock', $item['quantity']);
            }

            DB::commit();

            return redirect()->back()->with('success', 'Transaksi berhasil!')->with('receipt', $transaction->load('items', 'user'));
            
        } catch (\Exception $e) {
            DB::rollBack();
            return redirect()->back()->withErrors(['checkout' => $e->getMessage()]);
        }
    }
}
