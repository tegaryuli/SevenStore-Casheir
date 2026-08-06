<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Transaction;
use App\Models\TransactionItem;
use App\Models\Product;
use App\Models\ActivityLog;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    public function index()
    {
        $today = Carbon::today();
        
        // Ringkasan Hari Ini
        $todayTransactions = Transaction::whereDate('created_at', $today)->where('status', 'completed');
        $todayRevenue = (clone $todayTransactions)->sum('total_amount');
        $todayCount = (clone $todayTransactions)->count();
        
        // Total profit hari ini (dihitung dari items)
        $todayProfit = TransactionItem::whereHas('transaction', function($q) use ($today) {
            $q->whereDate('created_at', $today)->where('status', 'completed');
        })->sum('profit');

        // Low stock alerts
        $lowStockCount = Product::where('stock', '<=', 5)->count();

        // Grafik Tren Penjualan 7 Hari Terakhir
        $salesTrend = [];
        for ($i = 6; $i >= 0; $i--) {
            $date = Carbon::today()->subDays($i);
            $revenue = Transaction::whereDate('created_at', $date)
                        ->where('status', 'completed')
                        ->sum('total_amount');
                        
            $salesTrend[] = [
                'date' => $date->format('d M'),
                'revenue' => (float) $revenue
            ];
        }

        // Produk Terlaris (Top 5) bulan ini
        $startOfMonth = Carbon::now()->startOfMonth();
        $topProducts = TransactionItem::whereHas('transaction', function($q) use ($startOfMonth) {
                $q->where('status', 'completed')
                  ->where('created_at', '>=', $startOfMonth);
            })
            ->select('product_id', 'product_name', DB::raw('SUM(quantity) as total_sold'))
            ->groupBy('product_id', 'product_name')
            ->orderByDesc('total_sold')
            ->take(5)
            ->get();

        // Aktivitas Terbaru
        $recentActivities = ActivityLog::with('user')->latest()->take(5)->get();

        $isAdmin = request()->user()->hasRole('Admin');

        return Inertia::render('Dashboard', [
            'summary' => [
                'todayRevenue' => $todayRevenue,
                'todayCount' => $todayCount,
                'todayProfit' => $todayProfit,
                'lowStockCount' => $lowStockCount,
            ],
            'salesTrend' => $salesTrend,
            'topProducts' => $topProducts,
            'recentActivities' => $isAdmin ? $recentActivities : [],
            'isAdmin' => $isAdmin
        ]);
    }
}
