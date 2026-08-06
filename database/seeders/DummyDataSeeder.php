<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Product;
use App\Models\Transaction;
use App\Models\TransactionItem;
use App\Models\StockTransfer;
use App\Models\ActivityLog;
use Carbon\Carbon;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;

class DummyDataSeeder extends Seeder
{
    public function run(): void
    {
        // 1. Ensure we have users
        $admin = User::role('admin')->first();
        $kasir = User::role('kasir')->first();
        
        if (!$admin || !$kasir) {
            $this->call(UserSeeder::class);
            $admin = User::role('admin')->first();
            $kasir = User::role('kasir')->first();
        }

        // 2. Ensure we have products
        if (Product::count() === 0) {
            $this->call(MinimarketSeeder::class);
        }
        $products = Product::all();
        if ($products->isEmpty()) {
            $this->command->error('No products found to seed data with.');
            return;
        }

        $this->command->info('Generating dummy transactions and logs for the last 30 days...');

        DB::beginTransaction();

        try {
            $now = Carbon::now();
            $totalTransactionsCreated = 0;
            $totalActivitiesCreated = 0;

            for ($i = 30; $i >= 0; $i--) {
                $currentDate = $now->copy()->subDays($i);

                // --- GENERATE TRANSACTIONS ---
                // Random number of transactions per day (e.g. 5 to 15)
                $numTransactions = rand(5, 15);
                
                for ($t = 0; $t < $numTransactions; $t++) {
                    // Random time within the day (08:00 to 22:00)
                    $transactionTime = $currentDate->copy()->setHour(rand(8, 21))->setMinute(rand(0, 59))->setSecond(rand(0, 59));
                    
                    // Choose random user (70% kasir, 30% admin)
                    $seller = (rand(1, 10) > 3) ? $kasir : $admin;

                    // Generate Invoice Number
                    $invoiceNumber = 'INV-' . $transactionTime->format('Ymd') . '-' . strtoupper(Str::random(5));
                    
                    // How many unique items in this transaction?
                    $numItems = min($products->count(), rand(1, 4));
                    $cartProducts = $products->random($numItems);
                    
                    $totalAmount = 0;
                    $itemsData = [];
                    
                    foreach ($cartProducts as $prod) {
                        $qty = rand(1, 3);
                        // Make sure cost_price exists, if not assume 80% of price
                        $costPrice = $prod->cost_price ?? ($prod->price * 0.8);
                        
                        $subtotal = $prod->price * $qty;
                        $profit = ($prod->price - $costPrice) * $qty;
                        
                        $totalAmount += $subtotal;
                        
                        $itemsData[] = [
                            'product_id' => $prod->id,
                            'product_name' => $prod->name,
                            'price' => $prod->price,
                            'cost_price' => $costPrice,
                            'quantity' => $qty,
                            'subtotal' => $subtotal,
                            'profit' => $profit,
                            'created_at' => $transactionTime,
                            'updated_at' => $transactionTime,
                        ];
                    }

                    // Create Transaction
                    $transaction = Transaction::create([
                        'invoice_number' => $invoiceNumber,
                        'user_id' => $seller->id,
                        'total_amount' => $totalAmount,
                        'cash_given' => $totalAmount + rand(0, 50000), // Random change
                        'change_amount' => 0, // Will be calculated if needed, but not strictly required for stats
                        'payment_method' => 'cash',
                        'status' => 'completed',
                        'created_at' => $transactionTime,
                        'updated_at' => $transactionTime,
                    ]);

                    // Insert Items
                    $transaction->items()->createMany($itemsData);
                    
                    // Add an activity log occasionally for checkout (e.g. 10% chance)
                    if (rand(1, 100) <= 10) {
                        ActivityLog::create([
                            'user_id' => $seller->id,
                            'action' => 'checkout',
                            'description' => "Kasir {$seller->name} menyelesaikan transaksi {$invoiceNumber}",
                            'created_at' => $transactionTime,
                            'updated_at' => $transactionTime,
                        ]);
                        $totalActivitiesCreated++;
                    }
                    
                    $totalTransactionsCreated++;
                }

                // --- GENERATE STOCK TRANSFERS (Buka Segel) ---
                // E.g. 1-2 stock transfers a day
                $numTransfers = rand(0, 2);
                for ($st = 0; $st < $numTransfers; $st++) {
                    $transferTime = $currentDate->copy()->setHour(rand(8, 12))->setMinute(rand(0, 59));
                    $transactor = $admin; // usually admin does transfers
                    $prodToTransfer = $products->random();
                    
                    $qtyDeducted = rand(1, 3);
                    $qtyAdded = $qtyDeducted * ($prodToTransfer->conversion_rate ?? 1);
                    
                    $stockTransfer = StockTransfer::create([
                        'product_id' => $prodToTransfer->id,
                        'user_id' => $transactor->id,
                        'qty_deducted' => $qtyDeducted,
                        'qty_added' => $qtyAdded,
                        'created_at' => $transferTime,
                        'updated_at' => $transferTime,
                    ]);

                    ActivityLog::create([
                        'user_id' => $transactor->id,
                        'action' => 'warehouse_transfer',
                        'description' => "Memindahkan {$qtyDeducted} {$prodToTransfer->warehouse_unit} {$prodToTransfer->name} ke stok toko.",
                        'created_at' => $transferTime,
                        'updated_at' => $transferTime,
                    ]);
                    $totalActivitiesCreated++;
                }
            }

            DB::commit();
            $this->command->info("Successfully generated {$totalTransactionsCreated} transactions and {$totalActivitiesCreated} activity logs.");
            
        } catch (\Exception $e) {
            DB::rollBack();
            $this->command->error("Failed to generate dummy data: " . $e->getMessage());
        }
    }
}
