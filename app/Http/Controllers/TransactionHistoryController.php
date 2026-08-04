<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Transaction;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class TransactionHistoryController extends Controller
{
    public function index(Request $request)
    {
        $user = $request->user();
        $isStaff = $user->hasRole('Kasir');

        // Jika staff, paksa tanggal ke hari ini. Jika admin, gunakan input tanggal.
        $date = $isStaff 
            ? Carbon::today()->format('Y-m-d') 
            : $request->input('date', Carbon::today()->format('Y-m-d'));
            
        $filterUserId = $request->input('user_id', 'all');

        $query = Transaction::with(['user', 'items'])
            ->whereDate('created_at', $date)
            ->orderBy('created_at', 'desc');

        // Jika staff, hanya tampilkan transaksi milik mereka. Jika admin, filter berdasarkan user_id (jika bukan 'all').
        if ($isStaff) {
            $query->where('user_id', $user->id);
        } else if ($filterUserId !== 'all') {
            $query->where('user_id', $filterUserId);
        }

        $transactions = $query->paginate(20)->withQueryString();

        // Calculate summary for the selected date
        $summaryQuery = Transaction::whereDate('created_at', $date)
            ->where('status', 'completed');
            
        if ($isStaff) {
            $summaryQuery->where('user_id', $user->id);
        } else if ($filterUserId !== 'all') {
            $summaryQuery->where('user_id', $filterUserId);
        }

        $dailySummary = $summaryQuery->select(
                DB::raw('SUM(total_amount) as total_revenue'),
                DB::raw('COUNT(id) as total_transactions'),
                DB::raw('SUM(change_amount) as total_change')
            )->first();

        // Fetch list of kasir for admin filter
        $kasirList = [];
        if (!$isStaff) {
            $kasirList = \App\Models\User::role(['Kasir', 'Admin'])->select('id', 'name')->get();
        }

        return Inertia::render('Transaction', [
            'view' => 'index',
            'transactions' => $transactions,
            'selectedDate' => $date,
            'selectedUserId' => $filterUserId,
            'kasirList' => $kasirList,
            'summary' => [
                'revenue' => $dailySummary->total_revenue ?? 0,
                'transactions' => $dailySummary->total_transactions ?? 0,
                'change' => $dailySummary->total_change ?? 0,
            ]
        ]);
    }
}
