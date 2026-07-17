<?php
$user = App\Models\User::first();
$products = App\Models\Product::limit(3)->get();
if ($products->count() > 0) {
    echo "Creating dummy data for 2 days ago...\n";
    for ($i=0; $i<4; $i++) {
        $date = now()->subDays(2)->addHours($i + 9); // Starts at 9 AM
        $total = 0;
        $tx = App\Models\Transaction::create([
            'user_id' => $user->id ?? 1,
            'invoice_number' => 'INV-' . $date->format('Ymd') . '-' . rand(1000, 9999),
            'total_amount' => 0,
            'cash_given' => 0,
            'change_amount' => 0,
            'status' => 'completed',
            'created_at' => $date,
            'updated_at' => $date,
        ]);
        
        foreach($products as $p) {
            $qty = rand(1, 3);
            $subtotal = $p->price * $qty;
            // Handle if cost_price is 0 or null
            $cost = $p->cost_price ?? ($p->price * 0.8); 
            $profit = ($p->price - $cost) * $qty;
            
            App\Models\TransactionItem::create([
                'transaction_id' => $tx->id,
                'product_id' => $p->id,
                'product_name' => $p->name,
                'price' => $p->price,
                'cost_price' => $cost,
                'quantity' => $qty,
                'subtotal' => $subtotal,
                'profit' => $profit,
            ]);
            $total += $subtotal;
        }
        $cash = ceil($total / 50000) * 50000;
        if ($cash < $total) $cash = $total;
        $tx->update(['total_amount' => $total, 'cash_given' => $cash, 'change_amount' => $cash - $total]);
    }
    
    echo "Creating dummy data for yesterday...\n";
    for ($i=0; $i<3; $i++) {
        $date = now()->subDays(1)->addHours($i + 14); // Starts at 2 PM
        $total = 0;
        $tx = App\Models\Transaction::create([
            'user_id' => $user->id ?? 1,
            'invoice_number' => 'INV-' . $date->format('Ymd') . '-' . rand(1000, 9999),
            'total_amount' => 0,
            'cash_given' => 0,
            'change_amount' => 0,
            'status' => 'completed',
            'created_at' => $date,
            'updated_at' => $date,
        ]);
        
        foreach($products as $p) {
            $qty = rand(1, 2);
            $subtotal = $p->price * $qty;
            $cost = $p->cost_price ?? ($p->price * 0.8); 
            $profit = ($p->price - $cost) * $qty;
            
            App\Models\TransactionItem::create([
                'transaction_id' => $tx->id,
                'product_id' => $p->id,
                'product_name' => $p->name,
                'price' => $p->price,
                'cost_price' => $cost,
                'quantity' => $qty,
                'subtotal' => $subtotal,
                'profit' => $profit,
            ]);
            $total += $subtotal;
        }
        $cash = ceil($total / 100000) * 100000;
        if ($cash < $total) $cash = $total;
        $tx->update(['total_amount' => $total, 'cash_given' => $cash, 'change_amount' => $cash - $total]);
    }
    echo "Done!\n";
} else {
    echo "No products found to create dummy transactions.\n";
}
