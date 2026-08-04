<?php

namespace App\Http\Controllers;

use App\Models\ActivityLog;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NotificationController extends Controller
{
    public function index()
    {
        $logs = ActivityLog::with('user')->latest()->get();
        return Inertia::render('Notifications', [
            'logs' => $logs
        ]);
    }
}
