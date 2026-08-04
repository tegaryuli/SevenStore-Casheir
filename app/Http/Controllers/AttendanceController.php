<?php

namespace App\Http\Controllers;

use App\Models\Attendance;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Carbon\Carbon;

class AttendanceController extends Controller
{
    public function index(Request $request)
    {
        if (!$request->user()->hasRole('Admin')) {
            abort(403, 'Akses ditolak. Hanya Admin yang dapat melihat Laporan Absensi.');
        }

        $date = $request->input('date', Carbon::today()->format('Y-m-d'));

        $query = Attendance::with('user')
            ->whereDate('created_at', $date)
            ->orderBy('created_at', 'desc');

        $attendances = $query->paginate(20)->withQueryString();

        return Inertia::render('Reports', [
            'view' => 'attendances',
            'attendances' => $attendances,
            'selectedDate' => $date,
        ]);
    }
}
